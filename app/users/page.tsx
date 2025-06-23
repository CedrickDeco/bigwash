"use client";
import { useEffect, useState } from "react";
import EditUserPopup from "../components/EditUserPopup";

interface User {
	idUser: string;
	nom: string;
	email: string;
	role: string;
	telephone?: string;
	profilePicture?: string;
}

export default function UsersPage() {
	const [users, setUsers] = useState<User[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false); // État pour contrôler l'ouverture du popup
	const [status, setStatus] = useState<
		"idle" | "Chargement" | "success" | "Echec de chargement"
	>("idle");

	const [selectedUserId, setSelectedUserId] = useState<string | null>(null); // Stocke l'ID de l'utilisateur sélectionné

	
	useEffect(() => {
		setStatus("Chargement");
		fetch("/api/users")
			.then(res => {
				if (!res.ok) throw new Error("Erreur serveur");
				return res.json();
			})
			.then(data => {
				setUsers(data);
				setStatus("success");
			})
			.catch(() => {
				setStatus("Echec de chargement");
			});
	}, []);

	const handleDelete = async (idUser: string) => {
		if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
			await fetch(`/api/users/${idUser}`, { method: "DELETE" });
			setUsers(users.filter(user => user.idUser !== idUser));
		}
	};

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Liste des Utilisateurs</h1>

			<div className="overflow-x-auto">
				<table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
					<thead className="bg-white">
						<tr>
							<th className="px-4 py-2">Nom</th>
							<th className="px-4 py-2">Email</th>
							<th className="px-4 py-2">Téléphone</th>
							<th className="px-4 py-2">Rôle</th>
							<th className="px-4 py-2">Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map(user =>
							<tr
								className="border-b hover:bg-gray-100 cursor-pointer"
								key={user.idUser}
							>
								<td className="py-2 px-4 border-b">
									{user.nom}
								</td>
								<td className="py-2 px-4 border-b">
									{user.email}
								</td>
								<td className="py-2 px-4 border-b">
									{user.telephone || "N/A"}
								</td>
								<td className="py-2 px-4 border-b">
									{user.role}
								</td>
								<td className="py-2 px-4 border-b space-x-2">
									<button
										className="btn bg-col1 text-white btn-xs btn-info mr-1"
										onClick={() => {
											setSelectedUserId(user.idUser);
											setIsModalOpen(true);
										}}
									>
										Modifier
									</button>
									<button
										className="btn btn-xs btn-error text-white"
										onClick={() =>
											handleDelete(user.idUser)}
									>
										Supprimer
									</button>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>

			{/* Afficher le popup si un utilisateur est sélectionné */}
			{isModalOpen &&
				selectedUserId &&
				<EditUserPopup
					idUser={selectedUserId}
					onClose={() => {
						setIsModalOpen(false);
						setSelectedUserId(null);
					}}
				/>}
		</div>
	);
}
