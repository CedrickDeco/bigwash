"use client";
import { useEffect, useState } from "react";

interface User {
	idUser: string;
	nom: string;
	email: string;
	role: string;
	telephone?: string;
	profilePicture?: string;
}

interface EditUserPopupProps {
	idUser: string;
	onClose: () => void; // Fonction pour fermer le popup
}

export default function EditUserPopup({ idUser, onClose }: EditUserPopupProps) {
	const [user, setUser] = useState<User | null>(null);

	useEffect(
		() => {
			fetch(`/api/users/${idUser}`)
				.then(res => res.json())
				.then(data => setUser(data));
		},
		[idUser]
	);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());

		await fetch(`/api/users/${idUser}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});

		onClose(); // Fermer le popup après soumission
		window.location.reload(); // Recharge la page pour refléter les modifications
	};

	if (!user) return <p>Chargement...</p>;

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
				<h2 className="text-xl font-bold mb-4">
					Modifier l'utilisateur
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block mb-1">Nom</label>
						<input
							type="text"
							name="nom"
							defaultValue={user.nom}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div className="mb-4">
						<label className="block mb-1">Email</label>
						<input
							type="email"
							name="email"
							defaultValue={user.email}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div className="mb-4">
						<label className="block mb-1">Téléphone</label>
						<input
							type="text"
							name="telephone"
							defaultValue={user.telephone || ""}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div className="mb-4">
						<label className="block mb-1">Rôle</label>
						<input
							type="text"
							name="role"
							defaultValue={user.role}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div className="flex justify-end space-x-2">
						<button
							type="button"
							className="bg-gray-500 text-white px-4 py-2 rounded"
							onClick={onClose}
						>
							Annuler
						</button>
						<button
							type="submit"
							className="bg-green-500 text-white px-4 py-2 rounded"
						>
							Enregistrer
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// interface User {
// 	idUser: string;
// 	nom: string;
// 	email: string;
// 	role: string;
// 	telephone?: string;
// 	profilePicture?: string;
// }

// export default function EditUserPage({
// 	params
// }: {
// 	params: { idUser: string };
// }) {
// 	const { idUser } = params;
// 	const [user, setUser] = useState<User | null>(null);
// 	const router = useRouter();

// 	useEffect(
// 		() => {
// 			fetch(`/api/users/${idUser}`)
// 				.then(res => res.json())
// 				.then(data => setUser(data));
// 		},
// 		[idUser]
// 	);

// 	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		const formData = new FormData(e.currentTarget);
// 		const data = Object.fromEntries(formData.entries());

// 		await fetch(`/api/users/${idUser}`, {
// 			method: "PUT",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify(data)
// 		});

// 		router.push("/users");
// 	};

// 	if (!user) return <p>Chargement...</p>;

// 	return (
// 		<form onSubmit={handleSubmit} className="p-4">
// 			<h1 className="text-2xl font-bold mb-4">Modifier l'utilisateur</h1>
// 			<div className="mb-4">
// 				<label className="block mb-1">Nom</label>
// 				<input
// 					type="text"
// 					name="nom"
// 					defaultValue={user.nom}
// 					className="w-full p-2 border rounded"
// 				/>
// 			</div>
// 			<div className="mb-4">
// 				<label className="block mb-1">Email</label>
// 				<input
// 					type="email"
// 					name="email"
// 					defaultValue={user.email}
// 					className="w-full p-2 border rounded"
// 				/>
// 			</div>
// 			<div className="mb-4">
// 				<label className="block mb-1">Téléphone</label>
// 				<input
// 					type="text"
// 					name="role"
// 					defaultValue={user.telephone}
// 					className="w-full p-2 border rounded"
// 				/>
// 			</div>
// 			<div className="mb-4">
// 				<label className="block mb-1">Rôle</label>
// 				<input
// 					type="text"
// 					name="role"
// 					defaultValue={user.role}
// 					className="w-full p-2 border rounded"
// 				/>
// 			</div>
// 			<button
// 				type="submit"
// 				className="bg-green-500 text-white px-4 py-2 rounded"
// 			>
// 				Enregistrer
// 			</button>
// 		</form>
// 	);
// }
