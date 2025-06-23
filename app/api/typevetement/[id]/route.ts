import  prisma  from "../../../../lib/prisma";
import { NextResponse } from "next/server";


export async function PUT(req: Request, context: { params: { id: string } }) {
  const id = context.params.id;
  const body = await req.json();

  try {
    const updated = await prisma.typeVetement.update({
      where: { idType: id },
      data: body,
    });

    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Erreur lors de la mise à jour", { status: 500 });
  }
}


export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  try {
    await prisma.typeVetement.delete({
      where: { idType: id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Erreur de suppression" }, { status: 500 });
  }
}
