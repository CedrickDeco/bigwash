"use client";

import React, { useState } from "react";
import { useAppDispatch } from "@/lib/store";
import { updateVetementStatut } from "../../features/vetement/vetementSlice";
import type { Vetement } from "../../../type/type";

export const EditableStatusRow = ({ vetement }: { vetement: Vetement }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState<string>(vetement.statut);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as string

    try {
      await dispatch(
        updateVetementStatut({
          idVetement: vetement.idVetement,
          statut: newStatus,
        })
      ).unwrap();

      setStatus(newStatus);
    } catch (err) {
      console.error("Erreur lors de la mise à jour :", err);
      alert("Impossible de mettre à jour le statut.");
    }

    setIsEditing(false);
  };

  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="px-4 py-2 text-center">{vetement.type.nom}</td>
      <td className="px-4 py-2 text-center">{vetement.description || "-"}</td>
      <td className="px-4 py-2 text-center">{vetement.prix?.toFixed(2) ?? "0.00"} FCFA</td>

      {/* Cellule statut */}
      <td className="px-4 py-2 text-center capitalize">
        {isEditing ? (
          <select value={status} onChange={handleChange} className="border rounded p-1 text-center capitalize">
            <option value="en cours">En cours</option>
            <option value="pret">Prêt</option>
            <option value="livre">Livré</option>
          </select>
        ) : (
          status
        )}
      </td>

      {/* Bouton action */}
      <td className="px-4 py-2 text-center">
        {isEditing ? (
          <span className="text-gray-400">–</span>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 underline hover:text-blue-700"
          >
            Modifier
          </button>
        )}
      </td>
    </tr>
  );
}
