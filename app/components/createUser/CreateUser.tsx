"use client";
import React, { useState } from "react";
import "./createClient.scss";
import Link from "next/link";

interface FormData {
	nom: string;
	telephone: string;
}

export default function CreateClient() {
	// State pour gérer les valeurs des champs
	const [formData, setFormData] = useState<FormData>({
		nom: "",
		telephone: ""
	});

	// Gestion du changement des champs
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		field: keyof FormData
	) => {
		setFormData({ ...formData, [field]: e.target.value });
	};

	// Soumission du formulaire
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Données soumises :", formData);
	};

	return (
		<div className="the-content w-100">
			{/* Header */}
			<header className="mb-8">
				<h1 className="text-3xl font-bold text-col3 text-center">
					Enregistrer un client{" "}
				</h1>
				{/* <p className="text-lg font-semibold text-gray-600 text-center">client</p> */}
			</header>

			{/* Formulaire */}
			<form onSubmit={handleSubmit}>
				{/* Champ First Name */}
				<div className="relative mb-6">
					<input
						type="text"
						id="nom"
						value={formData.nom}
						onChange={e => handleChange(e, "nom")}
						className="block w-full  pt-5 pb-2 border-b border-b-gray-300  shadow-sm focus:outline-none focus:border-b-col3 focus:ring-col3 sm:text-sm peer"
						required
					/>
					<label
						htmlFor="nom"
						className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-300 ease-in-out peer-focus:text-xs peer-focus:top-2 peer-focus:text-col3 peer-valid:text-xs peer-valid:top-2 peer-valid:text-col3"
					>
						Nom
					</label>
				</div>

				{/* Champ Last Name */}
				<div className="relative mb-6">
					<input
						type="text"
						id="telephone"
						value={formData.telephone}
						onChange={e => handleChange(e, "telephone")}
						className="block w-full px-3 pt-5 pb-2 border-b border-b-gray-300  shadow-sm focus:outline-none focus:border-b-col3 focus:ring-col3 sm:text-sm peer"
						required
					/>
					<label
						htmlFor="telephone"
						className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-300 ease-in-out peer-focus:text-xs peer-focus:top-2 peer-focus:text-col3 peer-valid:text-xs peer-valid:top-2 peer-valid:text-col3"
					>
						Téléphone
					</label>
				</div>

				{/* Bouton de soumission */}
				<div className="bouton mt-10">
					<Link href="/" className="btn-text  bg-col1 text-warning ">
						Retour
					</Link>
					<input
						type="submit"
						value="Valider"
						className="btn-text bg-col3 text-white"
					/>
				</div>
			</form>
		</div>
	);
}

// "use client";
// import React, { useState } from "react";

// interface FormData {
// 	firstName: string;
// 	lastName: string;
// }

// export default function CreateClient() {
// 	// State pour gérer les valeurs des champs
// 	const [formData, setFormData] = useState<FormData>({
// 		firstName: "",
// 		lastName: ""
// 	});

// 	// Gestion du changement des champs
// 	const handleChange = (
// 		e: React.ChangeEvent<HTMLInputElement>,
// 		field: keyof FormData
// 	) => {
// 		setFormData({ ...formData, [field]: e.target.value });
// 	};

// 	// Soumission du formulaire
// 	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		console.log("Données soumises :", formData);
// 		// Vous pouvez ajouter ici une logique pour envoyer les données à un backend ou autre.
// 	};

// 	return (
// 		<div className="container mx-auto p-4">
// 			{/* Header */}
// 			<header className="mb-8">
// 				<h1 className="text-3xl font-bold text-black">Webform</h1>
// 				<p className="text-lg font-semibold text-gray-600">
// 					An exercise
// 				</p>
// 			</header>

// 			{/* Formulaire */}
// 			<form
// 				onSubmit={handleSubmit}
// 				className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
// 			>
// 				{/* Champ First Name */}
// 				<div className="mb-4">
// 					<label
// 						htmlFor="firstName"
// 						className="block text-sm font-medium text-gray-700"
// 					>
// 						First Name
// 					</label>
// 					<input
// 						type="text"
// 						id="firstName"
// 						value={formData.firstName}
// 						onChange={e => handleChange(e, "firstName")}
// 						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// 						required
// 					/>
// 				</div>

// 				{/* Champ Last Name */}
// 				<div className="mb-6">
// 					<label
// 						htmlFor="lastName"
// 						className="block text-sm font-medium text-gray-700"
// 					>
// 						Last Name
// 					</label>
// 					<input
// 						type="text"
// 						id="lastName"
// 						value={formData.lastName}
// 						onChange={e => handleChange(e, "lastName")}
// 						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// 						required
// 					/>
// 				</div>

// 				{/* Bouton de soumission */}
// 				<button
// 					type="submit"
// 					className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// 				>
// 					Submit
// 				</button>
// 			</form>
// 		</div>
// 	);
// }
