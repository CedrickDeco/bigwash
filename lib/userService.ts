import { writeFile } from 'fs/promises';
import path from 'path';
import prisma from "../lib/prisma";

export const createUserOrUpdate = async (
  clerkId: string,
  firstName: string,
  lastName: string,
  email: string,
  profilePicture?: string
) => {
  // Concaténer firstName et lastName pour créer le champ "nom"
  const nom = `${firstName || ''} ${lastName || ''}`.trim() || 'Unknown';

  // Gestion de la photo de profil
  let localProfilePicturePath = '';
  if (profilePicture && typeof profilePicture === 'string') {
    try {
      // Vérifier que profilePicture est une URL valide
      const url = new URL(profilePicture);
      const response = await fetch(url.toString());

      if (!response.ok) {
        throw new Error(`Échec du téléchargement de l'image : ${response.statusText}`);
      }

      // Convertir la réponse en buffer
      const buffer = await response.arrayBuffer();
      const fileName = `${clerkId}-profile.jpg`; // Nom de fichier unique basé sur clerkId
      const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);

      console.log('filePath====> :', filePath);

      // Écrire le fichier dans le répertoire uploads
      await writeFile(filePath, Buffer.from(buffer));
      localProfilePicturePath = `/uploads/${fileName}`; // Chemin relatif pour la base de données
    } catch (error) {
      console.error("Erreur lors du téléchargement ou de l'enregistrement de la photo de profil :", error);
      localProfilePicturePath = ''; // En cas d'erreur, définir une valeur par défaut
    }
  }

  // Créer ou mettre à jour l'utilisateur dans la base de données
  let user = await prisma.user.findUnique({ where: { clerkId } });

  if (!user) {
    // Créer un nouvel utilisateur
    user = await prisma.user.create({
      data: {
        clerkId,
        nom,
        email,
        profilePicture: localProfilePicturePath,
        role: 'secretaire', // Valeur par défaut
      },
    });
  } else {
    // Mettre à jour les données de l'utilisateur existant
    user = await prisma.user.update({
      where: { clerkId },
      data: {
        nom,
        email,
        profilePicture: localProfilePicturePath || user.profilePicture, // Conserver l'ancienne image si aucune nouvelle n'est téléchargée
      },
    });
  }

  return user;
};

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

/**
 * Récupère un utilisateur spécifique par son ID.
 * @param idUser - L'ID unique de l'utilisateur.
 * @returns L'utilisateur correspondant ou null s'il n'existe pas.
 */
export const getUserById = async (idUser: string) => {
  return await prisma.user.findUnique({
    where: { idUser },
  });
};

/**
 * Met à jour un utilisateur spécifique.
 * @param idUser - L'ID unique de l'utilisateur.
 * @param data - Les données à mettre à jour.
 * @returns L'utilisateur mis à jour.
 */
export const updateUser = async (idUser: string, data: Partial<{ nom: string; email: string; role: string; telephone: string; profilePicture: string }>) => {
  return await prisma.user.update({
    where: { idUser },
    data,
  });
};

/**
 * Supprime un utilisateur spécifique.
 * @param idUser - L'ID unique de l'utilisateur.
 */
export const deleteUser = async (idUser: string) => {
  await prisma.user.delete({
    where: { idUser },
  });
};