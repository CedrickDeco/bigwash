import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { auth } from '@clerk/nextjs/server'




export async function GET() {
  const lots = await prisma.lot.findMany({
    include: {
      client: { include: { user: true } },
      vetements: { include: { type: true } },
      paiements: true,
    },
  });

  const enrichedLots = lots.map((lot) => ({
    ...lot,
    totalPaid: lot.paiements.reduce((sum, p) => sum + p.montant, 0),
  }));

  return Response.json(enrichedLots);
}



export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    clientLabel,
    vetements = [],
    paiements = [],
    dateReccup,
    statut = 'en cours',
  } = body;

  if (!clientLabel || !vetements.length) {
    return Response.json({ error: 'Données incomplètes' }, { status: 400 });
  }

  // Authentification utilisateur
  const { userId: clerkId } = await auth();
  if (!clerkId) return Response.json({ error: 'Non autorisé' }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return Response.json({ error: 'Utilisateur introuvable' }, { status: 404 });

  // Recherche du client
  const client = await prisma.client.findFirst({
    where: {
      nom: { equals: clientLabel, mode: 'insensitive' },
      userId: user.idUser,
    },
  });
  if (!client) {
    return Response.json({ error: 'Client invalide ou non autorisé' }, { status: 403 });
  }

  const clientId = client.idClient;

  // Recherche des types de vêtements
  const typeLabels = vetements.map((v: any) => v.typeLabel);
  const types = await prisma.typeVetement.findMany({
    where: {
      nom: {
        in: typeLabels.map((t: string) => t.trim()),
        mode: 'insensitive',
      },
    },
  });

  const invalidTypes = typeLabels.filter(
    (label: string) =>
      !types.some((t) => t.nom.toLowerCase() === label.toLowerCase())
  );
  if (invalidTypes.length > 0) {
    return Response.json(
      { error: `Type(s) inconnu(s) : ${invalidTypes.join(', ')}` },
      { status: 400 }
    );
  }

  // Création du lot avec totalAmount temporaire
  const newLot = await prisma.lot.create({
    data: {
      clientId,
      dateReccup,
      dateEntree: new Date().toISOString(),
      statut,
      totalAmount: 0, // temporaire
      solde: 0,        // temporaire
      vetements: {
        create: vetements.map((v: any) => {
          const type = types.find(
            (t) => t.nom.toLowerCase() === v.typeLabel.toLowerCase()
          );
          const prix = v.prixOverride !== undefined ? v.prixOverride : type?.prix || 0;

          return {
            description: v.description,
            statut: v.statut || 'en cours',
            typeId: type!.idType,
            prix,
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
      vetements: { include: { type: true } },
      paiements: true,
    },
  });

  // Calcul réel des montants
  const confirmedTotalAmount = newLot.vetements.reduce(
    (sum, v) => sum + (v.prix ?? 0),
    0
  );
  const totalPaid = newLot.paiements.reduce(
    (sum, p) => sum + (p.montant ?? 0),
    0
  );
  const remaining = Math.max(0, confirmedTotalAmount - totalPaid);

  // Mise à jour des montants
  const lotFinal = await prisma.lot.update({
    where: { idLot: newLot.idLot },
    data: {
      totalAmount: confirmedTotalAmount,
      solde: remaining,
    },
    include: {
      client: true,
      vetements: { include: { type: true } },
      paiements: true,
    },
  });

  return Response.json({
    ...lotFinal,
    totalAmount: confirmedTotalAmount,
    totalPaid,
    remaining,
  });
}

