"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import {
    createDepenses,
    deleteDepenses,
    fetchDepenses,
    updateDepenses
} from "../features/depenses/depensesSlice";
import "./depenses.scss";
import toast, { Toaster } from "react-hot-toast"; // ✅ Import du toast

interface FormData {
    beneficiaire: string;
    ordonanceur: string;
    raison: string;
    montant: number;
    createdAt: string;
}

export default function DepensesComponent() {
    const dispatch = useAppDispatch();
    const { list = [], loading } = useAppSelector(state => state.depenses);

    const [formData, setFormData] = useState<FormData>({
        beneficiaire: "",
        ordonanceur: "",
        raison: "",
        montant: 0,
        createdAt: new Date().toISOString()
    });
    const [editForm, setEditForm] = useState<FormData>({
        beneficiaire: "",
        ordonanceur: "",
        raison: "",
        montant: 0,
        createdAt: ""
    });
    const [page, setPage] = useState(1);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const perPage = 10;

    useEffect(() => {
        dispatch(fetchDepenses());
    }, [dispatch]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        field: keyof FormData
    ) => {
        setFormData({
            ...formData,
            [field]:
                field === "montant"
                    ? parseFloat(e.target.value)
                    : e.target.value
        });
    };

    const handleAddSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(createDepenses(formData));
        toast.success("Dépense ajoutée avec succès !");
        
        setFormData({
            beneficiaire: "",
            ordonanceur: "",
            raison: "",
            montant: 0,
            createdAt: new Date().toISOString()
        });
        setIsAddModalOpen(false);
    };

    const openEditModal = (item: typeof list[number]) => {
        setEditingId(item.idDepenses);
        setEditForm({
            beneficiaire: item.beneficiaire,
            ordonanceur: item.ordonanceur,
            raison: item.raison,
            montant: item.montant,
            createdAt: item.createdAt
        });
        setIsEditModalOpen(true);
    };

    const confirmDelete = (id: string) => {
        if (
            window.confirm(
                "Êtes-vous sûr de vouloir supprimer cette dépense ?"
            )
        ) {
            dispatch(deleteDepenses(id));
            toast.success("Dépense supprimée avec succès !");
        }
    };

    const handleUpdate = () => {
        if (editingId) {
            dispatch(updateDepenses({ id: editingId, data: editForm }));
            toast.success("Dépense mise à jour !");
            setIsEditModalOpen(false);
            setEditingId(null);
        }
    };

    const paginatedItems = list.slice((page - 1) * perPage, page * perPage);
    const pageCount = Math.ceil(list.length / perPage);

    return (
        <>
            {/* Affichage des Toasts */}
            <Toaster />

            <div className="the-content">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-col3 text-center">
                        Dépenses
                    </h1>
                </header>

                <div className="flex justify-end px-[10%] mb-6">
                    <button
                        className="btn bg-col1 border border-solid border-col2 shadow-[0px_10px_15px_-5px_rgba(0,0,0,0.3)] rounded-[20px] transition-colors duration-300 ease-in-out hover:bg-col2 hover:text-col1 hover:border-solid border-col1 text-white"
                        onClick={() => setIsAddModalOpen(true)}
                    >
                        + Ajouter
                    </button>
                </div>

                <div className="mt-8">
                    {loading ? (
                        <div className="text-center text-black">Chargement...</div>
                    ) : (
                        <table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-white">
                                <tr>
                                    <th>#</th>
                                    <th>Beneficiaire</th>
                                    <th>Ordonanceur</th>
                                    <th>Raison</th>
                                    <th>Montant</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedItems.map((item, index) => (
                                    <tr className="border-b hover:bg-gray-100 cursor-pointer" key={item.idDepenses}>
                                        <td className=" px-4 py-2 text-center">{(page - 1) * perPage + index + 1}</td>
                                        <td className=" px-4 py-2 text-center">{item.beneficiaire}</td>
                                        <td className=" px-4 py-2 text-center">{item.ordonanceur}</td>
                                        <td className=" px-4 py-2 text-center">{item.raison}</td>
                                        <td className=" px-4 py-2 text-center">{item.montant} FCFA</td>
                                        <td className=" px-4 py-2 text-center">
                                            {new Date(
                                                item.createdAt
                                            ).toLocaleDateString("fr-FR")}
                                        </td>
                                        <td>
                                            <button
                                                className="btn bg-col1 text-white btn-xs btn-info mr-1"
                                                onClick={() =>
                                                    openEditModal(item)}
                                            >
                                                Modifier
                                            </button>
                                            <button
                                                className="btn btn-xs btn-error text-white"
                                                onClick={() =>
                                                    confirmDelete(
                                                        item.idDepenses
                                                    )
                                                }
                                            >
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {/* Pagination */}
                    <div className="flex justify-center space-x-2 mt-4">
                        {Array.from({ length: pageCount }, (_, i) => (
                            <button
                                key={i}
                                className={`btn btn-sm ${page === i + 1
                                    ? "btn-primary"
                                    : ""
                                }`}
                                onClick={() => setPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Modale d'ajout */}
                {isAddModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 shadow-md w-[90%] max-w-md border border-solid border-col2 rounded-[20px]">
                            <h2 className="text-xl font-bold mb-4">
                                Ajouter une dépense
                            </h2>
                            <form onSubmit={handleAddSubmit}>
                                {[
                                    "beneficiaire",
                                    "ordonanceur",
                                    "raison"
                                ].map(field => (
                                    <div
                                        className="relative mb-4"
                                        key={field}
                                    >
                                        <input
                                            type="text"
                                            value={
                                                formData[
                                                    field as keyof FormData
                                                ]
                                            }
                                            onChange={e =>
                                                handleChange(
                                                    e,
                                                    field as keyof FormData
                                                )
                                            }
                                            required
                                            className="block w-full pt-5 pb-2 border-b border-b-gray-300 focus:outline-none focus:border-b-col3 sm:text-sm peer"
                                        />
                                        <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm peer-focus:text-xs peer-focus:top-2 peer-focus:text-col3">
                                            {field.charAt(0).toUpperCase() +
                                                field.slice(1)}
                                        </label>
                                    </div>
                                ))}
                                <div className="relative mb-4">
                                    <input
                                        type="number"
                                        value={formData.montant}
                                        onChange={e =>
                                            handleChange(e, "montant")
                                        }
                                        required
                                        className="block w-full pt-5 pb-2 border-b border-b-gray-300 focus:outline-none focus:border-b-col3 sm:text-sm peer"
                                    />
                                    <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm peer-focus:text-xs peer-focus:top-2 peer-focus:text-col3">
                                        Montant
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
                                        onClick={() =>
                                            setIsAddModalOpen(false)
                                        }
                                    >
                                        Annuler
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Modale de modification */}
                {isEditModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded shadow-md w-[90%] max-w-md">
                            <h2 className="text-xl font-bold mb-4">
                                Modifier une dépense
                            </h2>
                            <input
                                type="text"
                                value={editForm.beneficiaire}
                                onChange={e =>
                                    setEditForm({
                                        ...editForm,
                                        beneficiaire: e.target.value
                                    })
                                }
                                className="input input-bordered w-full mb-3"
                                placeholder="Beneficiaire"
                            />
                            <input
                                type="text"
                                value={editForm.ordonanceur}
                                onChange={e =>
                                    setEditForm({
                                        ...editForm,
                                        ordonanceur: e.target.value
                                    })
                                }
                                className="input input-bordered w-full mb-3"
                                placeholder="Ordonanceur"
                            />
                            <input
                                type="number"
                                value={editForm.montant}
                                onChange={e =>
                                    setEditForm({
                                        ...editForm,
                                        montant: parseFloat(e.target.value)
                                    })
                                }
                                className="input input-bordered w-full mb-3"
                                placeholder="Montant"
                            />
                            <input
                                type="text"
                                value={editForm.raison}
                                onChange={e =>
                                    setEditForm({
                                        ...editForm,
                                        raison: e.target.value
                                    })
                                }
                                className="input input-bordered w-full mb-3"
                                placeholder="Raison"
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    className="btn btn-success"
                                    onClick={handleUpdate}
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
                    </div>
                )}
            </div>
        </>
    );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../lib/hooks";
// import {
// 	createDepenses,
// 	deleteDepenses,
// 	fetchDepenses,
// 	updateDepenses
// } from "../features/depenses/depensesSlice";
// import "./depenses.scss";

// interface FormData {
// 	beneficiaire: string;
// 	ordonanceur: string;
// 	raison: string;
// 	montant: number;
// 	createdAt: string;
// }

// export default function DepensesComponent() {
// 	const dispatch = useAppDispatch();
// 	const { list = [], loading } = useAppSelector(state => state.depenses);

// 	const [formData, setFormData] = useState<FormData>({
// 		beneficiaire: "",
// 		ordonanceur: "",
// 		raison: "",
// 		montant: 0,
// 		createdAt: ""
// 	});
// 	const [editForm, setEditForm] = useState<FormData>({
// 		beneficiaire: "",
// 		ordonanceur: "",
// 		raison: "",
// 		montant: 0,
// 		createdAt: ""
// 	});
// 	const [page, setPage] = useState(1);
// 	const [editingId, setEditingId] = useState<string | null>(null);
// 	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
// 	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

// 	const perPage = 10;

// 	useEffect(
// 		() => {
// 			dispatch(fetchDepenses());
// 		},
// 		[dispatch]
// 	);

// 	const handleChange = (
// 		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
// 		field: keyof FormData
// 	) => {
// 		setFormData({
// 			...formData,
// 			[field]:
// 				field === "montant"
// 					? parseFloat(e.target.value)
// 					: e.target.value
// 		});
// 	};

// 	const handleAddSubmit = (e: React.FormEvent) => {
// 		e.preventDefault();
// 		dispatch(createDepenses(formData));
// 		setFormData({
// 			beneficiaire: "",
// 			ordonanceur: "",
// 			raison: "",
// 			montant: 0,
// 			createdAt: new Date().toString()
// 		});
// 		setIsAddModalOpen(false);
// 	};

// 	const openEditModal = (item: typeof list[number]) => {
// 		setEditingId(item.idDepenses);
// 		setEditForm({
// 			beneficiaire: item.beneficiaire,
// 			ordonanceur: item.ordonanceur,
// 			raison: item.raison,
// 			montant: item.montant,
// 			createdAt: item.createdAt
// 		});
// 		setIsEditModalOpen(true);
// 	};

// 	const paginatedItems = list.slice((page - 1) * perPage, page * perPage);
// 	const pageCount = Math.ceil(list.length / perPage);

// 	return (
// 		<div className="the-content">
// 			<header className="mb-8">
// 				<h1 className="text-3xl font-bold text-col3 text-center">
// 					Dépenses
// 				</h1>
// 			</header>

// 			<div className="flex justify-end px-[10%] mb-6">
// 				<button
// 					className="btn bg-col1 border border-solid border-col2 shadow-[0px_10px_15px_-5px_rgba(0,0,0,0.3)] rounded-[20px] transition-colors duration-300 ease-in-out hover:bg-col2 hover:text-col1 hover:border-solid border-col1 text-white"
// 					onClick={() => setIsAddModalOpen(true)}
// 				>
// 					+ Ajouter
// 				</button>
// 			</div>

// 			<div className="mt-8">
// 				{loading
// 					? <div className="text-center text-col2">Chargement...</div>
// 					: <table className="table w-full">
// 							<thead>
// 								<tr>
// 									<th>#</th>
// 									<th>Beneficiaire</th>
// 									<th>Ordonanceur</th>
// 									<th>Raison</th>
// 									<th>Montant</th>
// 									<th>Date</th>
// 									<th>Action</th>
// 								</tr>
// 							</thead>
// 							<tbody>
// 								{paginatedItems.map((item, index) =>
// 									<tr key={item.idDepenses}>
// 										<td>
// 											{(page - 1) * perPage + index + 1}
// 										</td>
// 										<td>
// 											{item.beneficiaire}
// 										</td>
// 										<td>
// 											{item.ordonanceur}
// 										</td>
// 										<td>
// 											{item.raison}
// 										</td>
// 										<td>
// 											{item.montant} FCFA
// 										</td>
// 										<td>
// 											{new Date(
// 												item.createdAt
// 											).toLocaleDateString("fr-FR")}
// 										</td>
// 										<td>
// 											<button
// 												className="btn btn-xs btn-info mr-1"
// 												onClick={() =>
// 													openEditModal(item)}
// 											>
// 												Modifier
// 											</button>
// 											<button
// 												className="btn btn-xs btn-error text-white"
// 												onClick={() =>
// 													dispatch(
// 														deleteDepenses(
// 															item.idDepenses
// 														)
// 													)} // ✅ Corrigé ici
// 											>
// 												Supprimer
// 											</button>
// 										</td>
// 									</tr>
// 								)}
// 							</tbody>
// 						</table>}

// 				{/* Pagination */}
// 				<div className="flex justify-center space-x-2 mt-4">
// 					{Array.from({ length: pageCount }, (_, i) =>
// 						<button
// 							key={i}
// 							className={`btn btn-sm ${page === i + 1
// 								? "btn-primary"
// 								: ""}`}
// 							onClick={() => setPage(i + 1)}
// 						>
// 							{i + 1}
// 						</button>
// 					)}
// 				</div>
// 			</div>

// 			{/* Modale d'ajout */}
// 			{isAddModalOpen &&
// 				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
// 					<div className="bg-white p-6 shadow-md w-[90%] max-w-md border border-solid border-col2 rounded-[20px]">
// 						<h2 className="text-xl font-bold mb-4">
// 							Ajouter une dépense
// 						</h2>
// 						<form onSubmit={handleAddSubmit}>
// 							{/* Champs du formulaire */}
// 							{[
// 								"beneficiaire",
// 								"ordonanceur",
// 								"raison"
// 							].map(field =>
// 								<div className="relative mb-4" key={field}>
// 									<input
// 										type="text"
// 										value={
// 											formData[
// 												field as keyof FormData
// 											] as string
// 										}
// 										onChange={e =>
// 											handleChange(
// 												e,
// 												field as keyof FormData
// 											)}
// 										required
// 										className="block w-full pt-5 pb-2 border-b border-b-gray-300 focus:outline-none focus:border-b-col3 sm:text-sm peer"
// 									/>
// 									<label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm peer-focus:text-xs peer-focus:top-2 peer-focus:text-col3">
// 										{field.charAt(0).toUpperCase() +
// 											field.slice(1)}
// 									</label>
// 								</div>
// 							)}
// 							<div className="relative mb-4">
// 								<input
// 									type="number"
// 									value={formData.montant}
// 									onChange={e => handleChange(e, "montant")}
// 									required
// 									className="block w-full pt-5 pb-2 border-b border-b-gray-300 focus:outline-none focus:border-b-col3 sm:text-sm peer"
// 								/>
// 								<label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm peer-focus:text-xs peer-focus:top-2 peer-focus:text-col3">
// 									Montant
// 								</label>
// 							</div>
// 							<div className="flex justify-end space-x-2">
// 								<button
// 									type="submit"
// 									className="btn bg-col3 text-white"
// 								>
// 									Ajouter
// 								</button>
// 								<button
// 									type="button"
// 									className="btn btn-ghost"
// 									onClick={() => setIsAddModalOpen(false)}
// 								>
// 									Annuler
// 								</button>
// 							</div>
// 						</form>
// 					</div>
// 				</div>}

// 			{/* Modale de modification */}
// 			{isEditModalOpen &&
// 				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
// 					<div className="bg-white p-6 rounded shadow-md w-[90%] max-w-md">
// 						<h2 className="text-xl font-bold mb-4">
// 							Modifier une dépense
// 						</h2>
// 						<input
// 							type="text"
// 							value={editForm.beneficiaire}
// 							onChange={e =>
// 								setEditForm({
// 									...editForm,
// 									beneficiaire: e.target.value
// 								})}
// 							className="input input-bordered w-full mb-3"
// 							placeholder="Beneficiaire"
// 						/>
// 						<input
// 							type="text"
// 							value={editForm.ordonanceur}
// 							onChange={e =>
// 								setEditForm({
// 									...editForm,
// 									ordonanceur: e.target.value
// 								})}
// 							className="input input-bordered w-full mb-3"
// 							placeholder="Ordonanceur"
// 						/>
// 						<input
// 							type="number"
// 							value={editForm.montant}
// 							onChange={e =>
// 								setEditForm({
// 									...editForm,
// 									montant: parseFloat(e.target.value)
// 								})}
// 							className="input input-bordered w-full mb-3"
// 							placeholder="Montant"
// 						/>
// 						<input
// 							type="text"
// 							value={editForm.raison}
// 							onChange={e =>
// 								setEditForm({
// 									...editForm,
// 									raison: e.target.value
// 								})}
// 							className="input input-bordered w-full mb-3"
// 							placeholder="Raison"
// 						/>
// 						<div className="flex justify-end space-x-2">
// 							<button
// 								className="btn btn-success"
// 								onClick={() => {
// 									if (editingId) {
// 										dispatch(
// 											updateDepenses({
// 												id: editingId,
// 												data: editForm
// 											})
// 										);
// 										setIsEditModalOpen(false);
// 										setEditingId(null);
// 									}
// 								}}
// 							>
// 								Enregistrer
// 							</button>
// 							<button
// 								className="btn btn-ghost"
// 								onClick={() => {
// 									setIsEditModalOpen(false);
// 									setEditingId(null);
// 								}}
// 							>
// 								Annuler
// 							</button>
// 						</div>
// 					</div>
// 				</div>}
// 		</div>
// 	);
// }
