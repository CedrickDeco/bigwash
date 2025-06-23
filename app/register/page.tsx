"use client";
import React, { useState } from "react";
import "./register.scss";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormData {
	nom: string;
	type: string;
	description: string;
	prix: number;
}

export default function Register() {
	// State pour gérer les valeurs des champs
	const [formData, setFormData] = useState<FormData>({
		nom: "",
		type: "",
		description: "",
		prix: 0
	});

	// States pour les dates
	const [
		startDateEnregistrement,
		setStartDateEnregistrement
	] = useState<Date | null>(null);
	const [startDateSortie, setStartDateSortie] = useState<Date | null>(null);

	// Gestion du changement des champs texte
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		field: keyof FormData
	) => {
		setFormData({ ...formData, [field]: e.target.value });
	};

	// Soumission du formulaire
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Données soumises :", {
			...formData,
			dateEnregistrement: startDateEnregistrement,
			dateSortie: startDateSortie
		});
	};

	return (
		<div className="the-content">
			{/* Header */}
			<header className="mb-8">
				<h1 className="text-3xl font-bold text-col3 text-center">
					Enregistrer un lot
				</h1>
			</header>

			<form onSubmit={handleSubmit}>
				<div className="form-container px-[10%]">
					<div className="left pr-[5%]">
						<div className="left-container">
							<div className="relative mb-6">
								<input
									type="text"
									id="nom"
									value={formData.nom}
									onChange={e => handleChange(e, "nom")}
									className="block w-full pt-5 pb-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:border-b-col3 focus:ring-col3 sm:text-sm peer"
									required
								/>
								<label
									htmlFor="nom"
									className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-300 ease-in-out peer-focus:text-xs peer-focus:top-2 peer-focus:text-col3 peer-valid:text-xs peer-valid:top-2 peer-valid:text-col3"
								>
									Nom
								</label>
							</div>

							<div className="relative mb-6">
								<input
									type="text"
									id="type"
									value={formData.type}
									onChange={e => handleChange(e, "type")}
									className="block w-full px-3 pt-5 pb-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:border-b-col3 focus:ring-col3 sm:text-sm peer"
									required
								/>
								<label
									htmlFor="type"
									className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-300 ease-in-out peer-focus:text-xs peer-focus:top-2 peer-focus:text-col3 peer-valid:text-xs peer-valid:top-2 peer-valid:text-col3"
								>
									Type de vêtement
								</label>
							</div>

							<div className="relative mb-6">
								<input
									type="text"
									id="prix"
									value={formData.prix.toString()}
									onChange={e => handleChange(e, "prix")}
									className="block w-full px-3 pt-5 pb-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:border-b-col3 focus:ring-col3 sm:text-sm peer"
									required
								/>
								<label
									htmlFor="prix"
									className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-300 ease-in-out peer-focus:text-xs peer-focus:top-2 peer-focus:text-col3 peer-valid:text-xs peer-valid:top-2 peer-valid:text-col3"
								>
									Prix
								</label>
							</div>
						</div>
					</div>

					<div className="right pl-[5%]">
						<div className="right-container flex flex-col w-full max-w-lg mx-auto">
							<div className="dates">
								{/* Date Enregistrement */}
								<div className="de relative mb-6">
									<DatePicker
										selected={startDateEnregistrement}
										onChange={(date: Date | null) =>
											setStartDateEnregistrement(date)}
										dateFormat="dd/MM/yyyy"
										id="dateEnregistrement"
										className={`block w-full px-3 pt-5 pb-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:border-b-col3 focus:ring-col3 sm:text-sm peer ${startDateEnregistrement
											? "has-value"
											: ""}`}
										required
									/>
									<label
										htmlFor="dateEnregistrement"
										className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-300 ease-in-out peer-focus:text-xs peer-focus:top-2 peer-focus:text-col3 ${startDateEnregistrement
											? "text-xs top-2 text-col3"
											: ""}`}
									>
										Date d'enregistrement
									</label>
								</div>

								{/* Date de Sortie */}
								<div className="ds relative mb-6">
									<DatePicker
										selected={startDateSortie}
										onChange={(date: Date | null) =>
											setStartDateSortie(date)}
										dateFormat="dd/MM/yyyy"
										id="dateSortie"
										className={`block w-full px-3 pt-5 pb-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:border-b-col3 focus:ring-col3 sm:text-sm peer ${startDateSortie
											? "has-value"
											: ""}`}
										required
									/>
									<label
										htmlFor="dateSortie"
										className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-300 ease-in-out peer-focus:text-xs peer-focus:top-2 peer-focus:text-col3 ${startDateSortie
											? "text-xs top-2 text-col3"
											: ""}`}
									>
										Date de sortie
									</label>
								</div>
							</div>

							{/* Description */}
							<textarea
								id="description"
								className="p-4 min-h-[150px] rounded-2xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all shadow-sm placeholder-gray-400 resize-none"
								onChange={e => handleChange(e, "description")}
								value={formData.description}
								placeholder="Description du vêtement..."
							/>
						</div>
					</div>
				</div>

				<div className="bouton mt-10">
					<Link href="/" className="btn-text bg-col1 text-warning">
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
