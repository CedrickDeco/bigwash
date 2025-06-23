import { NextResponse } from 'next/server';
import { getAllUsers } from '../../../lib/userService';

/**
 * Route API pour récupérer tous les utilisateurs.
 */
export async function GET() {
  try {
    // Appel au service pour récupérer tous les utilisateurs
    const users = await getAllUsers();

    // Retourner la liste des utilisateurs
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des utilisateurs :', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}