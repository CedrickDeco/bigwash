import prisma from '../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server'



export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const idLot = searchParams.get('id');

  if (!idLot) {
    return Response.json({ error: 'ID du lot requis' }, { status: 400 });
  }
  

  const lot = await prisma.lot.findUnique({
    where: { idLot },
    include: {
      client: {
        include: {
          user: true,
        },
      },
      vetements: {
        include: {
          type: true,
        },
      },
      paiements: true,
    },
  });

  if (!lot) {
    return Response.json({ error: 'Lot introuvable' }, { status: 404 });
  }

  // Calcul des totaux
  const totalAmount = lot.vetements.reduce(
    (sum, v) => sum + v.type.prix,
    0
  );
  const totalPaid = lot.paiements.reduce(
    (sum, p) => sum + p.montant,
    0
  );
  const remaining = Math.max(0, totalAmount - totalPaid);

  const enrichedLot = {
    ...lot,
    vetements: lot.vetements,
    totalAmount,
    totalPaid,
    remaining,
  };

  return Response.json(enrichedLot);
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const {
    idLot,
    clientLabel,
    vetements = [],
    paiements = [],
    dateReccup,
    statut,
  } = body;

  if (!idLot) {
    return Response.json({ error: "ID du lot requis" }, { status: 400 });
  }

  // Authentification
  const { userId: clerkId } = await auth();
  if (!clerkId) return Response.json({ error: "Non autorisé" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return Response.json({ error: "Utilisateur introuvable" }, { status: 404 });

  const lot = await prisma.lot.findUnique({
    where: { idLot },
    include: { client: true },
  });
  if (!lot) return Response.json({ error: "Lot introuvable" }, { status: 404 });
  if (lot.client.userId !== user.idUser)
    return Response.json({ error: "Accès refusé" }, { status: 403 });

  // ✅ Mise à jour uniquement du statut (cas auto)
  if (statut && !clientLabel && vetements.length === 0 && paiements.length === 0) {
    const updated = await prisma.lot.update({
      where: { idLot },
      data: { statut },
    });
    return Response.json({ message: "Statut mis à jour", statut: updated.statut });
  }

  // Mise à jour complète (client, vêtements, paiements, etc.)
  let clientId = lot.clientId;

  if (clientLabel && clientLabel !== lot.client.nom) {
    const newClient = await prisma.client.findFirst({
      where: {
        nom: { equals: clientLabel, mode: "insensitive" },
        userId: user.idUser,
      },
    });
    if (!newClient)
      return Response.json({ error: "Client invalide ou non autorisé" }, { status: 400 });

    clientId = newClient.idClient;
  }

  const typeLabels = vetements.map((v: any) => v.typeLabel);
  const types = await prisma.typeVetement.findMany({
    where: {
      nom: {
        in: typeLabels.map((t: string) => t.trim()),
        mode: "insensitive",
      },
    },
  });

  const invalidTypes = typeLabels.filter(
    (label: string) =>
      !types.some((t) => t.nom.toLowerCase() === label.toLowerCase())
  );
  if (invalidTypes.length > 0) {
    return Response.json(
      { error: `Type(s) inconnu(s) : ${invalidTypes.join(", ")}` },
      { status: 400 }
    );
  }

  const totalAmount = vetements.reduce((sum: number, v: any) => {
    const type = types.find(
      (t) => t.nom.toLowerCase() === v.typeLabel.toLowerCase()
    );
    const prix = v.prixOverride !== undefined ? v.prixOverride : type?.prix || 0;
    return sum + prix;
  }, 0);

  const totalPaid = paiements.reduce((sum: number, p: any) => sum + p.montant, 0);
  const solde = Math.max(0, totalAmount - totalPaid);

  await prisma.vetement.deleteMany({ where: { lotId: idLot } });
  await prisma.paiement.deleteMany({ where: { lotId: idLot } });

  const updatedLot = await prisma.lot.update({
    where: { idLot },
    data: {
      clientId,
      dateReccup,
      statut,
      totalAmount,
      solde,
      vetements: {
        create: vetements.map((v: any) => {
          const type = types.find(
            (t) => t.nom.toLowerCase() === v.typeLabel.toLowerCase()
          );
          const prix =
            v.prixOverride !== undefined ? v.prixOverride : type?.prix || 0;

          return {
            description: v.description,
            statut: v.statut || "en cours",
            typeId: type!.idType,
          };
        }),
      },
      paiements: paiements.length
        ? {
            create: paiements.map((p: any) => ({
              montant: p.montant,
              date: p.date,
            })),
          }
        : undefined,
    },
    include: {
      client: true,
      vetements: {
        include: {
          type: true,
        },
      },
      paiements: true,
    },
  });

  return Response.json({
    ...updatedLot,
    totalAmount,
    totalPaid,
    remaining: solde,
  });
}


// export async function PUT(req: NextRequest) {
//   const body = await req.json();

//   const {
//     idLot,
//     clientLabel,
//     vetements = [],
//     paiements = [],
//     dateReccup,
//     statut,
//   } = body;

//   if (!idLot) {
//     return Response.json({ error: 'ID du lot requis' }, { status: 400 });
//   }

//   // Authentification utilisateur
//   const { userId: clerkId } = await auth();
//   if (!clerkId) return Response.json({ error: 'Non autorisé' }, { status: 401 });

//   const user = await prisma.user.findUnique({
//     where: { clerkId },
//   });
//   if (!user) return Response.json({ error: 'Utilisateur introuvable' }, { status: 404 });

//   // Vérifie si le lot existe et appartient au bon utilisateur
//   const lot = await prisma.lot.findUnique({
//     where: { idLot },
//     include: { client: true },
//   });
//   if (!lot) return Response.json({ error: 'Lot introuvable' }, { status: 404 });
//   if (lot.client.userId !== user.idUser) {
//     return Response.json({ error: 'Accès refusé' }, { status: 403 });
//   }

//   // Si le client est modifié, on vérifie qu’il existe bien
//   let clientId = lot.clientId;
//   if (clientLabel && clientLabel !== lot.client.nom) {
//     const newClient = await prisma.client.findFirst({
//       where: {
//         nom: { equals: clientLabel, mode: 'insensitive' },
//         userId: user.idUser,
//       },
//     });
//     if (!newClient)
//       return Response.json({ error: 'Client invalide ou non autorisé' }, { status: 400 });

//     clientId = newClient.idClient;
//   }

//   // Recherche des types de vêtements par label
//   const typeLabels = vetements.map((v: any) => v.typeLabel);
//   const types = await prisma.typeVetement.findMany({
//     where: {
//       nom: {
//         in: typeLabels.map((t: string) => t.trim()),
//         mode: 'insensitive',
//       },
//     },
//   });

//   const invalidTypes = typeLabels.filter(
//     (label: string) =>
//       !types.some((t) => t.nom.toLowerCase() === label.toLowerCase())
//   );
//   if (invalidTypes.length > 0) {
//     return Response.json(
//       { error: `Type(s) inconnu(s) : ${invalidTypes.join(', ')}` },
//       { status: 400 }
//     );
//   }

//   // Recalcul totalAmount
//   const totalAmount = vetements.reduce((sum: number, v: any) => {
//     const type = types.find(
//       (t) => t.nom.toLowerCase() === v.typeLabel.toLowerCase()
//     );

//     const prix =
//       v.prixOverride !== undefined ? v.prixOverride : type?.prix || 0;
//     return sum + prix;
//   }, 0);

//   const totalPaid = paiements.reduce(
//     (sum: number, p: any) => sum + p.montant,
//     0
//   );
//   const solde = Math.max(0, totalAmount - totalPaid);

//   // Supprime anciens vêtements et paiements pour les remplacer
//   await prisma.vetement.deleteMany({ where: { lotId: idLot } });
//   await prisma.paiement.deleteMany({ where: { lotId: idLot } });

//   // Mise à jour complète du lot
//   const updatedLot = await prisma.lot.update({
//     where: { idLot },
//     data: {
//       clientId,
//       dateReccup,
//       statut,
//       totalAmount,
//       solde,
//       vetements: {
//         create: vetements.map((v: any) => {
//           const type = types.find(
//             (t) => t.nom.toLowerCase() === v.typeLabel.toLowerCase()
//           );

//           const prix =
//             v.prixOverride !== undefined ? v.prixOverride : type?.prix || 0;

//           return {
//             description: v.description,
//             statut: v.statut || 'en cours',
//             typeId: type!.idType,
//             // prix, // 👈 On sauvegarde aussi le prix utilisé
//           };
//         }),
//       },
//       paiements: paiements.length
//         ? {
//             create: paiements.map((p: any) => ({
//               montant: p.montant,
//               date: p.date,
//             })),
//           }
//         : undefined,
//     },
//     include: {
//       client: true,
//       vetements: {
//         include: {
//           type: true,
//         },
//       },
//       paiements: true,
//     },
//   });

//   return Response.json({
//     ...updatedLot,
//     totalAmount,
//     totalPaid,
//     remaining: solde,
//   });
// }



export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const idLot = url.pathname.split('/').pop();

    if (!idLot || typeof idLot !== 'string') {
      return NextResponse.json({ error: 'ID du lot invalide' }, { status: 400 });
    }

    // Supprimer les vêtements liés au lot
    await prisma.vetement.deleteMany({
      where: { lotId: idLot },
    });

    // Supprimer les paiements liés (si tu veux les gérer aussi)
    await prisma.paiement.deleteMany({
      where: { lotId: idLot },
    });

    // Supprimer le lot
    await prisma.lot.delete({
      where: { idLot }, // ✅ ici c’est bon, car idLot est bien la clé primaire
    });

    return NextResponse.json(
      { message: 'Le lot a été supprimé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Erreur lors de la suppression du lot:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
