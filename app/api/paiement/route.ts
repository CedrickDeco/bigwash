// app/api/paiement/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server'
import prisma from '../../../lib/prisma';

export async function POST(req: NextRequest) {
  const { lotId, montant, date } = await req.json();

  if (!lotId || !montant || !date) {
    return NextResponse.json(
      { error: 'lotId, montant et date sont requis' },
      { status: 400 }
    );
  }

  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) {
    return NextResponse.json({ error: 'Utilisateur introuvable' }, { status: 404 });
  }

  const lot = await prisma.lot.findUnique({
    where: { idLot: lotId },
    include: { client: true },
  });

  if (!lot) {
    return NextResponse.json({ error: 'Lot introuvable' }, { status: 404 });
  }

  if (lot.client.userId !== user.idUser) {
    return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
  }

  // ✅ Ajouter le paiement
  await prisma.paiement.create({
    data: {
      montant,
      date,
      lotId,
    },
  });

  // 🔄 Recalculer total des paiements
  const totalPaid = await prisma.paiement.aggregate({
    where: { lotId },
    _sum: { montant: true },
  });

  const solde = Math.max(0, lot.totalAmount - (totalPaid._sum.montant || 0));

  // 🔄 Mise à jour du solde dans le lot
  const updatedLot = await prisma.lot.update({
    where: { idLot: lotId },
    data: { solde },
    include: {
      paiements: true,
    },
  });

  return NextResponse.json({
    message: 'Paiement ajouté avec succès',
    totalPaid: totalPaid._sum.montant || 0,
    solde: updatedLot.solde,
    paiements: updatedLot.paiements,
  });
}
