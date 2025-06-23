import { NextResponse } from "next/server";
import  prisma  from "../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { nom, prix, etat } = data;

    const typeVetement = await prisma.typeVetement.create({
      data: {
        nom,
        prix: parseFloat(prix),
        etat,
      },
    });

    return NextResponse.json(typeVetement, { status: 201 });
  } catch (error) {
    console.error("Erreur API:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const typeVetements = await prisma.typeVetement.findMany({
      orderBy: { nom: "asc" },
    });

    return NextResponse.json(typeVetements, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
