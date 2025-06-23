"use client";

import React from "react";

type Vetement = {
  type?: {
    nom: string;
    prix: number;
  };
  description?: string;
  statut?: string;
  prix: number;
};

export default function VetementListModal({
  vetements,
  onClose,
}: {
  vetements: Vetement[];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
          aria-label="Fermer"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4">Détails des vêtements</h2>

        {vetements.length === 0 ? (
          <p className="text-gray-500">Aucun vêtement dans ce lot.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Type</th>
                  <th className="border px-4 py-2 text-left">Description</th>
                  <th className="border px-4 py-2 text-left">Statut</th>
                  <th className="border px-4 py-2 text-right">Prix</th>
                </tr>
              </thead>
              <tbody>
                {vetements.map((v, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">
                      {v.type?.nom ?? "Non spécifié"}
                    </td>
                    <td className="border px-4 py-2">
                      {v.description ?? "-"}
                    </td>
                    <td className="border px-4 py-2 capitalize">
                      {v.statut ?? "-"}
                    </td>
                    <td className="border px-4 py-2 text-right">
                      {v?.prix?.toFixed(2) ?? "0.00"} FCFA
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
