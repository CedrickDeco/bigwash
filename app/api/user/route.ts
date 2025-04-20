import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import prisma from '@/lib/prisma';



export async function POST(req: Request) {
  try {
    // Récupérer les données du corps de la requête
    const body = await req.json();
    console.log("📩 Requête API reçue :", body);

    const { clerkId, firstName, lastName, email, profilePicture } = body;

    // Validation des champs obligatoires
    if (!clerkId || !email) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants : clerkId et email sont requis." },
        { status: 400 }
      );
    }

    // Concaténer firstName et lastName pour créer le champ "nom"
    const nom = `${firstName || ''} ${lastName || ''}`.trim() || 'Unknown';

    // Vérifier si l'utilisateur existe déjà dans la base de données
    let user = await prisma.user.findUnique({
      where: { clerkId },
    });
    console.log("Contenu de user en haut====> :", user);

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

        // Écrire le fichier dans le répertoire uploads
        await writeFile(filePath, Buffer.from(buffer));
        localProfilePicturePath = `/uploads/${fileName}`; // Chemin relatif pour la base de données
      } catch (error) {
        console.error('Erreur lors du téléchargement ou de l\'enregistrement de la photo de profil :', error);
        localProfilePicturePath = ''; // En cas d'erreur, définir une valeur par défaut
      }
    }

    // Créer ou mettre à jour l'utilisateur dans la base de données
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
      console.log("✅ Nouvel utilisateur créé :", user);
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
      console.log("✅ Utilisateur mis à jour :", user);
    }

    // Retourner les informations de l'utilisateur
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("❌ Erreur API :", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}





// // src/app/api/user/route.ts
// import { getAuth } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';
// import prisma from '@/lib/prisma';
// import { writeFile } from 'fs/promises';
// import path from 'path';

// export async function POST(req: NextRequest) {
//   try {
//     // Récupérer les informations de l'utilisateur connecté via Clerk
//     const body = await req.json();
//     console.log("📩 Requête API reçue :", body);
//     console.log("📩 L'Id du user dans la requête API reçue ===> :", body.clerkId);
//     // const { userId, sessionClaims } = getAuth(req);
//     // console.log("UserId from Clerk:", userId);

//     if (!userId) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     // Extraire les informations de l'utilisateur depuis Clerk
//     const firstName = sessionClaims?.firstName || ''; // Prénom de l'utilisateur
//     const lastName = sessionClaims?.lastName || '';   // Nom de famille de l'utilisateur
//     const userEmail = sessionClaims?.email || '';     // Email de l'utilisateur
//     const profileImageUrl = sessionClaims?.imageUrl; // URL de la photo de profil

//     // Combiner firstName et lastName pour créer le champ "nom"
//     const fullName = `${firstName} ${lastName}`.trim() || 'Unknown'; // Concaténation avec un espace

//     // Rechercher l'utilisateur dans la base de données
//     let user = await prisma.user.findUnique({
//       where: { clerkId: userId },
//     });

//     // Si l'utilisateur n'existe pas, le créer avec les informations de Clerk
//     if (!user) {
//       // Télécharger et enregistrer la photo de profil localement
//       let localProfilePicturePath = '';
//       if (profileImageUrl && typeof profileImageUrl === 'string') {
//         try {
//           // Vérifier que profileImageUrl est une URL valide
//           const url = new URL(profileImageUrl); // Convertir explicitement en URL
//           const response = await fetch(url.toString()); // Utiliser toString() pour garantir une chaîne

//           if (!response.ok) {
//             throw new Error(`Failed to fetch image: ${response.statusText}`);
//           }

//           // Convertir la réponse en buffer
//           const buffer = await response.arrayBuffer();
//           const fileName = `${userId}-profile.jpg`; // Nom de fichier unique basé sur userId
//           const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);

//           // Écrire le fichier dans le répertoire uploads
//           await writeFile(filePath, Buffer.from(buffer));
//           localProfilePicturePath = `/uploads/${fileName}`; // Chemin relatif pour la base de données
//         } catch (error) {
//           console.error('Error downloading or saving profile picture:', error);
//           localProfilePicturePath = ''; // En cas d'erreur, définir une valeur par défaut
//         }
//       }

//       // Créer l'utilisateur dans la base de données
//       user = await prisma.user.create({
//         data: {
//           clerkId: userId,
//           nom: fullName,
//           email: userEmail,
//           telephone: '', // Chaîne vide par défaut
//           profilePicture: localProfilePicturePath,
//           role: 'secretaire',
//         },
//       });
//       console.log("Utilisateur créé avec succès:", user);
//     } else {
//       // Mettre à jour les données de l'utilisateur existant
//       user = await prisma.user.update({
//         where: { clerkId: userId },
//         data: {
//           nom: fullName,
//           email: userEmail,
//           profilePicture: user.profilePicture || '', // Conserver l'ancienne image si aucune nouvelle n'est téléchargée
//         },
//       });
//       console.log("Utilisateur mis à jour avec succès:", user);
//     }

//     // Retourner les informations de l'utilisateur
//     return NextResponse.json(user, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }