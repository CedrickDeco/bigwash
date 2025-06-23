import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
	req: Request,
	{ params }: { params: { id: string } }
) {
	const data = await req.json();
	const depense = await prisma.depenses.update({
		where: { idDepenses: params.id },
		data
	});
	return NextResponse.json(depense);
}

export async function DELETE(
	_: Request,
	{ params }: { params: { id: string } }
) {
	await prisma.depenses.delete({ where: { idDepenses: params.id } });
	return NextResponse.json({ success: true });
}
