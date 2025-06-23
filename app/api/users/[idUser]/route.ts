import { NextResponse } from 'next/server';
import {
  getUserById,
  updateUser,
  deleteUser,
} from '../../../../lib/userService';

/**
 * Route API pour récupérer un utilisateur spécifique par son ID.
 */
export async function GET(req: Request, { params }: { params: { idUser: string } }) {
  try {
    const user = await getUserById(params.idUser);

    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('❌ Erreur lors de la récupération de l\'utilisateur :', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

/**
 * Route API pour mettre à jour un utilisateur spécifique.
 */
export async function PUT(req: Request, { params }: { params: { idUser: string } }) {
  try {
    const body = await req.json();
    const updatedUser = await updateUser(params.idUser, body);

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour de l\'utilisateur :', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

/**
 * Route API pour supprimer un utilisateur spécifique.
 */
export async function DELETE(req: Request, { params }: { params: { idUser: string } }) {
  try {
    await deleteUser(params.idUser);

    return NextResponse.json({ message: 'Utilisateur supprimé avec succès' }, { status: 200 });
  } catch (error) {
    console.error('❌ Erreur lors de la suppression de l\'utilisateur :', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}