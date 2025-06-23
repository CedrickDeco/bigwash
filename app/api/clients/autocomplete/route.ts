import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || '';
  const clients = await prisma.client.findMany({
    where: { nom: { startsWith: query, mode: 'insensitive' } },
    select: { idClient: true, nom: true },
  });
  return Response.json(clients.map((c) => ({ id: c.idClient, nom: c.nom })));
}