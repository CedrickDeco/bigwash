import prisma from '../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// ✅ Signature correcte pour App Router
export async function GET(
  req: NextRequest,
  // context: { params: { id: string } }
   { params }: { params: { id: string } }
) {
  console.log("PARAMS = ", params)
  const id = params.id;

  const client = await prisma.client.findUnique({
   where: { idClient: id },
    include: {
      user: true,
      lots: {
        include: {
          vetements: {
            include: {
              type: true, // Pour avoir nom + prix du type de vêtement
            },
          },
          paiements: true, // Si tu veux afficher les paiements
        },
      },
    },
});

if (!client) {
  return NextResponse.json({ error: 'Client not found' }, { status: 404 });
}

// Calcul du montant total (en évitant les montants undefined/null)
const montantTotal = client.lots?.reduce(
  (total, lot) => total + (lot.totalAmount ?? 0),
  0
) ?? 0;
  return NextResponse.json({
  ...client,
  montantTotal,
});
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const updatedClient = await prisma.client.update({
    where: { idClient: params.id },
    data: body,
  });

  return NextResponse.json(updatedClient);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.client.delete({
    where: { idClient: params.id },
  });

  return NextResponse.json({ message: 'Client deleted' });
}
