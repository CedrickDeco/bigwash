import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { auth } from '@clerk/nextjs/server'


export async function GET() {
  const clients = await prisma.client.findMany({
    include: {
      lots: {
      include: {
        vetements: true // si nécessaire pour le modal
      }
    },
      user: { // Inclut tous les attributs du user
        select: {
          idUser: true,
          nom: true,
          email: true,
          telephone: true,
          role: true,
          createdAt: true,
          updatedAt: true
          // Ajoutez d'autres champs si nécessaire
        }
      }
    },
  });

  const formattedClients = clients.map((client) => ({
    id: client.idClient,
    nom: client.nom,
    telephone: client.telephone,
    nbreLots: client.lots.length,
    montantTotal: client.lots.reduce((sum, lot) => sum + lot.totalAmount, 0),
    user: client.user // Toutes les infos du user
  }));

  return Response.json(formattedClients);
}

export async function POST(req: Request) {
  const { userId: clerkId } = await auth();

  if (!clerkId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { clerkId },
  });

  if (!user) {
    return NextResponse.json({ error: 'Utilisateur introuvable' }, { status: 404 });
  }

  const body = await req.json();

  const client = await prisma.client.create({
    data: {
      nom: body.nom,
      telephone: body.telephone,
      user: { // Syntaxe de relation complète
        connect: {
          idUser: user.idUser
        }
      }
    },
    include: {
      user: true // Inclut tous les attributs du user
    }
  });

  return NextResponse.json(client);
}
