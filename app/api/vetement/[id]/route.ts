import { NextRequest, NextResponse } from 'next/server';
import  prisma  from "../../../../lib/prisma"; // ou ton système de base de données

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const lotId = params.id;
  console.log("Lot ID reçu :", lotId);


  if (!lotId) {
    return Response.json({ error: "Missing lotId" }, { status: 400 });
  }
  console.log("API /vetement appelée avec lotId:", lotId);
  const vetements = await prisma.vetement.findMany({
    where: { lotId },
    include: {
      type: true, // ✅ Charge aussi le type lié
    },
  });

  return Response.json(vetements);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const vetementId = params.id;
  const body = await request.json();
  const { statut } = body;

  const allowedStatus = ["en cours", "pret", "livre"];
  if (!statut || !allowedStatus.includes(statut)) {
    return NextResponse.json(
      { error: `Statut invalide. Doit être l'un de : ${allowedStatus.join(", ")}` },
      { status: 400 }
    );
  }

  try {
    const updated = await prisma.vetement.update({
      where: { idVetement: vetementId },
      data: { statut },
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur serveur lors de la mise à jour" },
      { status: 500 }
    );
  }
}



// export async function PATCH(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const vetementId = params.id;

//   const body = await request.json();
//   const { statut } = body;

//   const allowedStatus = ["en cours", "pret", "livre"];
//   if (!statut || !allowedStatus.includes(statut)) {
//     return NextResponse.json(
//       { error: `Statut invalide. Doit être l'un de : ${allowedStatus.join(", ")}` },
//       { status: 400 }
//     );
//   }

//   try {
//     const updatedVetement = await prisma.vetement.update({
//       where: { idVetement: vetementId },
//       data: { statut },
//     });

//     return NextResponse.json(updatedVetement);
//   } catch (error) {
//     console.error("Erreur lors de la mise à jour :", error);
//     return NextResponse.json(
//       { error: "Erreur serveur lors de la mise à jour du statut" },
//       { status: 500 }
//     );
//   }
// }