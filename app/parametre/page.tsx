"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import {
	deleteTypeVetement,
	updateTypeVetement,
	addTypeVetement,
	fetchTypeVetements
} from "../features/typeVetement/typeVetementSlice";
import "./parametre.scss";

interface FormData {
	nom: string;
	etat: string;
	prix: number;
}

export default function Parametre() {
	const [formData, setFormData] = useState<FormData>({
		nom: "",
		etat: "",
		prix: 0
	});
	const dispatch = useAppDispatch();
	const { items, loading } = useAppSelector(state => state.typeVetement);
	const [page, setPage] = useState(1);
	const [editingId, setEditingId] = useState<string | null>(null);
	const [editForm, setEditForm] = useState<FormData>({
		nom: "",
		etat: "",
		prix: 0
	});
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Nouvel état
	const perPage = 10;

	useEffect(
		() => {
			dispatch(fetchTypeVetements());
		},
		[dispatch]
	);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		field: keyof FormData
	) => {
		setFormData({
			...formData,
			[field]:
				field === "prix" ? parseFloat(e.target.value) : e.target.value
		});
	};

	const handleAddSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(addTypeVetement(formData));
		setFormData({ nom: "", etat: "", prix: 0 });
		setIsAddModalOpen(false);
	};

	const openEditModal = (item: typeof items[number]) => {
		setEditingId(item.idType);
		setEditForm({ nom: item.nom, etat: item.etat, prix: item.prix });
		setIsEditModalOpen(true);
	};

	const paginatedItems = items.slice((page - 1) * perPage, page * perPage);
	const pageCount = Math.ceil(items.length / perPage);

	return (
		<div className="the-content">
			<header className="mb-8">
				<h1 className="text-3xl font-bold text-col3 text-center">
					Type de vêtement
				</h1>
			</header>

			{/* Bouton + pour ouvrir la modale d'ajout */}
			<div className="flex justify-end px-[10%] mb-6">
				<button
					className="btn bg-col1 border border-solid border-col2 shadow-[0px_10px_15px_-5px_rgba(0,0,0,0.3)] rounded-[20px] transition-colors duration-300 ease-in-out hover:bg-col2 hover:text-col1 hover:border-solid border-col1 text-white"
					onClick={() => setIsAddModalOpen(true)}
				>
					+ Ajouter
				</button>
			</div>

			{/* Tableau */}
			<div className="mt-8">
				<table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
					<thead className="bg-white ">
						<tr>
							<th className="px-4 py-2">#</th>
							<th className="px-4 py-2">Nom</th>
							<th className="px-4 py-2">Prix</th>
							<th className="px-4 py-2">État</th>
							<th className="px-4 py-2">Action</th>
						</tr>
					</thead>
					<tbody>
						{paginatedItems.map((item, index) =>
							<tr className="border-b hover:bg-gray-100 cursor-pointer" key={item.idType}>
								<td className="border-b px-4 py-2 text-center">
									{(page - 1) * perPage + index + 1}
								</td>
								<td className=" px-4 py-2 text-center">
									{item.nom}
								</td>
								<td className=" px-4 py-2 text-center">
									{item.prix} FCFA
								</td>
								<td className=" px-4 py-2 text-center">
									{item.etat}
								</td>
								<td className=" px-4 py-2 text-center">
									<button
										className="btn bg-col1 text-white btn-xs btn-info mr-1"
										onClick={() => openEditModal(item)}
									>
										Modifier
									</button>
									<button
										className="btn btn-xs btn-error text-white"
										onClick={() =>
											dispatch(
												deleteTypeVetement(item.idType)
											)}
									>
										Supprimer
									</button>
								</td>
							</tr>
						)}
					</tbody>
				</table>

				{/* Pagination */}
				<div className="flex justify-center space-x-2 mt-4">
					{Array.from({ length: pageCount }, (_, i) =>
						<button
							key={i}
							className={`btn btn-sm ${page === i + 1
								? "btn-primary"
								: ""}`}
							onClick={() => setPage(i + 1)}
						>
							{i + 1}
						</button>
					)}
				</div>
			</div>

			{/* Modale d’ajout */}
			{isAddModalOpen &&
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
					<div className="bg-white p-6  shadow-md w-[90%] max-w-md border border-solid border-col2 shadow-[0px_10px_15px_-5px_rgba(0,0,0,0.3)] rounded-[20px]">
						<h2 className="text-xl font-bold mb-4">
							Ajouter un type de vêtement
						</h2>
						<form onSubmit={handleAddSubmit} className="">
							<div className="relative mb-4">
								<input
									type="text"
									value={formData.nom}
									onChange={e => handleChange(e, "nom")}
									required
									className="block w-full pt-5 pb-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:border-b-col3 focus:ring-col3 sm:text-sm peer"
								/>
								<label
									htmlFor="nom"
									className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-300 ease-in-out peer-focus:text-xs peer-focus:top-2 peer-focus:text-col3 peer-valid:text-xs peer-valid:top-2 peer-valid:text-col3"
								>
									Nom
								</label>
							</div>

							<div className="relative mb-4">
								<select
									value={formData.etat}
									onChange={e => handleChange(e, "etat")}
									required
									className="block w-full px-3 pt-6 pb-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:border-b-col3 focus:ring-col3 sm:text-sm peer appearance-none bg-transparent"
								>
									<option value="" disabled hidden>
										Choisir l'état
									</option>
									<option value="statique">Statique</option>
									<option value="dynamique">Dynamique</option>
								</select>
								<label
									htmlFor="etat"
									className={`absolute left-3 ${formData.etat
										? "text-xs top-1 text-col3"
										: "text-sm top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-xs peer-focus:top-1 peer-focus:text-col3"} transition-all duration-300 ease-in-out pointer-events-none`}
								/>
								<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
									<svg
										className="w-4 h-4 text-gray-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
							</div>

							<div className="relative mb-6">
								<input
									type="number"
									value={formData.prix}
									onChange={e => handleChange(e, "prix")}
									required
									className="block w-full pt-5 pb-2 border-b border-b-gray-300 shadow-sm focus:outline-none focus:border-b-col3 focus:ring-col3 sm:text-sm peer"
								/>
								<label
									htmlFor="prix"
									className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-300 ease-in-out peer-focus:text-xs peer-focus:top-2 peer-focus:text-col3 peer-valid:text-xs peer-valid:top-2 peer-valid:text-col3"
								>
									Prix
								</label>
							</div>

							<div className="flex justify-end space-x-2">
								<button
									type="submit"
									className="btn bg-col3 text-white"
								>
									Ajouter
								</button>
								<button
									type="button"
									className="btn btn-ghost"
									onClick={() => setIsAddModalOpen(false)}
								>
									Annuler
								</button>
							</div>
						</form>
					</div>
				</div>}

			{/* Modale de modification (inchangée) */}
			{isEditModalOpen &&
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded shadow-md w-[90%] max-w-md">
						<h2 className="text-xl font-bold mb-4">
							Modifier le type de vêtement
						</h2>
						<input
							type="text"
							value={editForm.nom}
							onChange={e =>
								setEditForm({
									...editForm,
									nom: e.target.value
								})}
							className="input input-bordered w-full mb-3"
							placeholder="Nom"
						/>
						<select
							value={editForm.etat}
							onChange={e =>
								setEditForm({
									...editForm,
									etat: e.target.value
								})}
							className="select select-bordered w-full mb-3"
						>
							<option value="statique">Statique</option>
							<option value="dynamique">Dynamique</option>
						</select>
						<input
							type="number"
							value={editForm.prix}
							onChange={e =>
								setEditForm({
									...editForm,
									prix: parseFloat(e.target.value)
								})}
							className="input input-bordered w-full mb-4"
							placeholder="Prix"
						/>
						<div className="flex justify-end space-x-2">
							<button
								className="btn btn-success"
								onClick={() => {
									if (editingId) {
										dispatch(
											updateTypeVetement({
												id: editingId,
												data: editForm
											})
										);
										setIsEditModalOpen(false);
										setEditingId(null);
									}
								}}
							>
								Enregistrer
							</button>
							<button
								className="btn btn-ghost"
								onClick={() => {
									setIsEditModalOpen(false);
									setEditingId(null);
								}}
							>
								Annuler
							</button>
						</div>
					</div>
				</div>}
		</div>
	);
}
