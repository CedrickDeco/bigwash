import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const depenses = await prisma.depenses.findMany({
		orderBy: { createdAt: "desc" }
	});
	return NextResponse.json(depenses);
}

export async function POST(req: Request) {
	const data = await req.json();
	const depense = await prisma.depenses.create({ data });
	return NextResponse.json(depense);
}
