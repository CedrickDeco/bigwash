// components/lot/EditLotModal.tsx
import { Lot, Paiement } from "../../../type/type";
import { useAppDispatch } from "../../../lib/store";
import { updateLot } from "../../features/lot/lotSlice";
import { toast } from "react-hot-toast";
import React, { useState } from "react";

interface EditLotModalProps {
	lot: Lot;
	onClose: () => void;
}

const EditLotModal: React.FC<EditLotModalProps> = ({ lot, onClose }) => {
	const dispatch = useAppDispatch();
	const [statut, setStatut] = useState<string>("en cours");
	const [clientNom, setClientNom] = useState<string>(lot.client.nom);
	const [dateReccup, setDateReccup] = useState<string>(lot.dateReccup);
	const [paiements, setPaiements] = useState<Paiement[]>(lot.paiements);

	const handlePaiementMontantChange = (index: number, montant: number) => {
		setPaiements(prev =>
			prev.map((p, i) => (i === index ? { ...p, montant } : p))
		);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const updatedLot = {
			idLot: lot.idLot,
			clientLabel: clientNom,
			dateReccup,
			statut,
			vetements: lot.vetements.map(v => ({
				typeLabel: v.type.nom,
				description: v.description,
				statut: v.statut,
				prixOverride: undefined
			})),
			paiements: paiements.map(p => ({
				montant: p.montant,
				date: new Date().toISOString()
			}))
		};

		try {
			await dispatch(updateLot(updatedLot)).unwrap();
			toast.success("Lot mis à jour !");
			onClose();
		} catch (err) {
			toast.error("Erreur lors de la mise à jour du lot.");
			console.error(err);
		}
	};

	// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	const form = e.currentTarget;
	// 	const formData = new FormData(form);

	// 	const updatedLot = {
	// 		idLot: lot.idLot,
	// 		clientLabel: lot.client.nom,
	// 		dateReccup: lot.dateReccup,
	// 		statut: formData.get("statut") as string,
	// 		vetements: lot.vetements.map(v => ({
	// 			typeLabel: v.type.nom,
	// 			description: v.description,
	// 			statut: v.statut,
	// 			prixOverride: undefined // ou une valeur personnalisée si modifiable
	// 		})),
	// 		paiements: lot.paiements.map(p => ({
	// 			montant: p.montant,
	// 			date: p.date
	// 		}))
	// 	};

	// 	try {
	// 		await dispatch(updateLot(updatedLot)).unwrap();
	// 		toast.success("Lot mis à jour !");
	// 		onClose();
	// 	} catch (err) {
	// 		toast.error("Erreur lors de la mise à jour du lot.");
	// 		console.error(err);
	// 	}
	// };

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white p-6 rounded shadow-md w-full max-w-md">
				<h2 className="text-xl font-semibold mb-4">Modifier le lot</h2>
				<form onSubmit={handleSubmit}>
					{/* Client nom */}
					<div className="mb-4">
						<label className="block mb-1">Nom du client</label>
						<input
							type="text"
							value={clientNom}
							onChange={e => setClientNom(e.target.value)}
							className="input input-bordered w-full"
							required
						/>
					</div>

					{/* Date récupération */}
					<div className="mb-4">
						<label className="block mb-1">
							Date de récupération
						</label>
						<input
							type="date"
							value={dateReccup}
							onChange={e => setDateReccup(e.target.value)}
							className="input input-bordered w-full"
							required
						/>
					</div>

					<div className="mb-4">
						<label className="block mb-1">Statut</label>
						<select
							value={statut}
							onChange={e => setStatut(e.target.value)}
							className="w-full border p-2 mb-2 rounded"
						>
							<option value="en cours">En cours</option>
							<option value="pret">Prêt</option>
							<option value="retire">Retiré</option>
						</select>
					</div>

					{/* Paiements - liste modifiable */}
					<div className="mb-4">
						<label className="block mb-1 font-semibold">
							Paiements
						</label>
						{paiements.map((p, idx) =>
							<div
								key={p.idPaiement || idx}
								className="flex gap-2 mb-2"
							>
								<input
									type="number"
									step="0.01"
									value={p.montant}
									onChange={e =>
										handlePaiementMontantChange(
											idx,
											parseFloat(e.target.value)
										)}
									className="input input-bordered flex-1"
									required
								/>
							</div>
						)}
					</div>

					{/* <div className="mb-4">
						<label className="block mb-1">Prix total</label>
						<input name="prixTotal" type="number" step="0.01" defaultValue={lot.totalAmount} className="input input-bordered w-full" required />
					</div> */}
					<div className="flex justify-end gap-2">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={onClose}
						>
							Annuler
						</button>
						<button type="submit" className="btn btn-primary">
							Enregistrer
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditLotModal;
