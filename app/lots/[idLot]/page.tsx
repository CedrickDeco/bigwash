"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/store";
import { fetchVetementsByLotId } from "../../features/vetement/vetementSlice";
import { useParams } from "next/navigation";
import { EditableStatusRow } from "../../components/vetement/EditableStatusRow";
import Link from "next/link";

export default function DetailLotPage() {
	const params = useParams();
	const idLot = Array.isArray(params.idLot) ? params.idLot[0] : params.idLot;
	const dispatch = useAppDispatch();

	const { vetements, loading, error } = useAppSelector(
		state => state.vetements
	);

	useEffect(
		() => {
			if (idLot) {
				dispatch(fetchVetementsByLotId(idLot));
			}
		},
		[dispatch, idLot]
	);

	// ✅ Met à jour automatiquement le statut du lot
	useEffect(
		() => {
			if (!idLot || vetements.length === 0) return;

			const allStatuts = vetements.map(v => v.statut);

			let newStatut: "pret" | "livré" | "en cours" = "en cours";

			if (allStatuts.every(s => s === "pret")) {
				newStatut = "pret";
			} else if (allStatuts.every(s => s === "livré")) {
				newStatut = "livré";
			} else if (allStatuts.every(s => s === "pret" || s === "livré")) {
				newStatut = "en cours";
			}

			const updateLotStatut = async () => {
				try {
					await fetch(`/api/lot/${idLot}`, {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ idLot, statut: newStatut })
					});
				} catch (error) {
					console.error(
						"Erreur de mise à jour du statut du lot :",
						error
					);
				}
			};

			updateLotStatut();
		},
		[vetements, idLot]
	);

	return (
		<div className="mt-6 p-4">
			<h1 className="text-2xl font-bold mb-4">Vêtements</h1>

			{loading && <p>Chargement des vêtements...</p>}
			{error &&
				<p className="text-red-500">
					Erreur : {error}
				</p>}

			{!loading &&
				vetements.length === 0 &&
				<p className="text-gray-500">
					Aucun vêtement trouvé dans ce lot.
				</p>}

			{!loading &&
				vetements.length > 0 &&
				<table className="min-w-full border-collapse shadow-md rounded-lg overflow-hidden">
					<thead className="bg-gray-200">
						<tr>
							<th className="px-4 py-2">Type</th>
							<th className="px-4 py-2">Description</th>
							<th className="px-4 py-2">Prix</th>
							<th className="px-4 py-2">Statut</th>
							<th className="px-4 py-2">Action</th>
						</tr>
					</thead>
					<tbody>
						{vetements.map(vetement =>
							<EditableStatusRow
								key={vetement.idVetement}
								vetement={vetement}
							/>
						)}
					</tbody>
				</table>}
			<div className="text-right">
				<Link
					href="/commandes"
					className="btn bg-col1 text-white btn-xs btn-info mr-1 mt-5"
				>
					Retour
				</Link>
			</div>
		</div>
	);
}
