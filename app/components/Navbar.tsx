"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import "./Navbar.scss";
import axios from 'axios';

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { isLoaded, isSignedIn, user } = useUser();
	const pathname = usePathname();

      
  useEffect(() => {
    if (isLoaded && user) {
      // Envoyer une requête POST avec Axios pour enregistrer/mettre à jour les données de l'utilisateur
      axios
        .post('/api/users/create', {
          clerkId: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.emailAddresses[0]?.emailAddress || '',
          profilePicture: user.imageUrl,
        })
        .then((response) => {
          console.log('Réponse du serveur:', response.data);
        })
        .catch((error) => {
          console.error('Erreur lors de l\'enregistrement:', error);
        });
    }
  }, [user, isLoaded]);



	return (
		<div className="bgc px-5 md:px-[10%] py-1">
			<div className="flex justify-between items-center">
				{/* Logo */}
				<div className="flex text-2xl items-center font-bold">
					<Link href="/">
						<div className="w-44 h-16 relative">
							<Image
								src="/logo_bigwash.jpg"
								alt="Logo"
								fill
								className="cursor-pointer object-contain"
							/>
						</div>
					</Link>
				</div>
				{/* Menu desktop (toujours visible sur écran large) */}
				{isLoaded &&
					<div className="hidden md:flex md:items-center md:space-x-8">
						<ul className="flex space-x-8">
							<li>
								<Link
									href="/"
									className={`text-gray-800  hover:text-blue-500 nav-item ${pathname ===
									"/"
										? "active"
										: ""}`}
								>
									Accueil
								</Link>
							</li>
							<li>
								<Link
									href="/commande"
									className={`nav-item text-gray-800  hover:text-blue-500  ${pathname ===
									"/about"
										? "active"
										: ""}`}
								>
									Commandes
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									className={`text-gray-800  hover:text-blue-500 nav-item ${pathname ===
									"/projects"
										? "active font-bold"
										: ""}`}
								>
									Utilisateurs
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className={`text-gray-800  hover:text-blue-500 nav-item ${pathname ===
									"/contact"
										? "active font-bold"
										: ""}`}
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href={"/sign-in"}
									className={`text-gray-800  hover:text-blue-500 nav-item ${pathname ===
									"/contact"
										? "active font-bold"
										: ""}`}
								>
									{isLoaded &&
										!isSignedIn &&
										<Link
											href="/sign-in"
											className="text-gray-800  hover:text-blue-500"
										>
											Connexion
										</Link>}
								</Link>
								<div className="">
									{isLoaded && isSignedIn && <UserButton />}
								</div>
							</li>
						</ul>
					</div>}
				{/* Bouton de profil pour les utilisateurs connectés */}
				{/* {isSignedIn && <UserButton />} */}

				{/* Icône du menu burger sur mobile */}
				<div className="md:hidden">
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="p-2"
					>
						{menuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Menu mobile (visible seulement si menuOpen === true) */}
			<div className={`${menuOpen ? "block" : "hidden"} md:hidden mt-2`}>
				<div className="flex flex-col gap-3 items-center bg-base-200 p-4 rounded-lg shadow-lg">
					<Link
						href="/budgets"
						className="btn btn-sm w-full text-center"
						onClick={() => setMenuOpen(false)}
					>
						Accueil
					</Link>
					<Link
						href="/dashboard"
						className="btn btn-sm w-full text-center"
						onClick={() => setMenuOpen(false)}
					>
						Commandes
					</Link>
					<Link
						href="/transactions"
						className="btn btn-sm w-full text-center"
						onClick={() => setMenuOpen(false)}
					>
						Utilisateurs
					</Link>
					<Link
						href="/transactions"
						className="btn btn-sm w-full text-center"
						onClick={() => setMenuOpen(false)}
					>
						Contacts
					</Link>
					<Link
						href={"/sign-in"}
						className={`text-gray-800  hover:text-blue-500 nav-item ${pathname ===
						"/contact"
							? "active font-bold"
							: ""}`}
						onClick={() => setMenuOpen(false)}
					>
						{isLoaded &&
							!isSignedIn &&
							<Link
								href="/sign-in"
								className="text-gray-800  hover:text-blue-500"
							>
								Connexion
							</Link>}
					</Link>
					<div
						className="w-full text-center"
						onClick={() => setMenuOpen(false)}
					>
						{isLoaded && isSignedIn && <UserButton />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;