"use client";

import React, { useState } from "react";
import VetementListModal from "./VetementListModal";
import Link from "next/link";

export default function LotListTable({ lots }: { lots: any[] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVetements, setSelectedVetements] = useState<any[]>([]);

  const handleOpenDetails = (vetements: any[]) => {
    setSelectedVetements(vetements ?? []);
    setModalOpen(true);
  };

  return (
    <div className="mt-6">
      {/* <h2 className="text-xl font-semibold mb-2">Lots</h2> */}

      <table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Date Entrée</th>
            <th className="border px-4 py-2">Date Récupération</th>
            <th className="border px-4 py-2">Montant Total</th>
            <th className="border px-4 py-2">Solde</th>
            <th className="border px-4 py-2">Statut</th>
            <th className="border px-4 py-2">Détails</th>
          </tr>
        </thead>
        <tbody>
          {lots?.length > 0 ? (
            lots.map((lot) => (
              <tr key={lot.idLot} className="hover:bg-gray-50 transition">
                <td className="border px-4 py-2 text-center">
                  {new Date(lot.dateEntree).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2 text-center">
                  {lot.dateReccup
                    ? new Date(lot.dateReccup).toLocaleDateString()
                    : "-"}
                </td>
                <td className="border px-4 py-2 text-right">
                  {lot.totalAmount?.toFixed(2) ?? "0.00"} FCFA
                </td>
                <td className="border px-4 py-2 text-right">
                  {lot.solde?.toFixed(2) ?? "0.00"} FCFA
                </td>
                <td className="border px-4 py-2 text-center capitalize">
                  {lot.statut}
                </td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => handleOpenDetails(lot.vetements)}
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    Voir vêtements
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-4 text-gray-500">
                Aucun lot trouvé
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="text-right">
				<Link
					href="/customer"
					className="btn bg-col1 text-white btn-xs btn-info mr-1 mt-5"
				>
					Retour
				</Link>
			</div>

      {/* ✅ MODALE */}
      {modalOpen && (
        <VetementListModal
          vetements={selectedVetements}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
