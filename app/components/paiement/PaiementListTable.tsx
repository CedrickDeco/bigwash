"use client";

import React, { useEffect, useState } from "react";
import PaiementModal from "./PaiementModal";
import { useAppDispatch, useAppSelector } from "../../../lib/store";
import { fetchLots } from "../../features/lot/lotSlice";
import { useRouter } from "next/navigation";

export default function PaiementListTable() {
  const dispatch = useAppDispatch();
  const { lots, loading, error } = useAppSelector((state) => state.lots);
  const { clients, status } = useAppSelector((state: any) => state.clients);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLotId, setSelectedLotId] = useState<string | null>(null);
  const [selectedLotSolde, setSelectedLotSolde] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchLots());
  }, [dispatch]);

  const openPaiementModal = (lotId: string, solde: number) => {
    setSelectedLotId(lotId);
    setSelectedLotSolde(solde);
    setModalOpen(true);
  };

  const handlePaiementAjoute = () => {
    dispatch(fetchLots()); // Recharge les données après paiement
  };

  const lotsTries = [...lots].sort(
    (a, b) => new Date(b.dateEntree).getTime() - new Date(a.dateEntree).getTime()
  );

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Commandes </h2>

      {status === "loading" && <p>Chargement...</p>}
      {status === "failed" && <p>Erreur de chargement</p>}

      <table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
        <thead className="bg-white">
          <tr>
            <th className=" px-4 py-2">Date Entrée</th>
            <th className=" px-4 py-2">Date Récupération</th>
            <th className=" px-4 py-2">Montant Total</th>
            <th className=" px-4 py-2">Solde</th>
            <th className=" px-4 py-2">Statut</th>
            <th className=" px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6} className="text-center py-4">
                Chargement...
              </td>
            </tr>
          ) : lotsTries?.length > 0 ? (
            lotsTries.map((lot) => (
              <tr key={lot.idLot} className="border-b hover:bg-gray-100 transition">
                <td className="px-4 py-2 text-center">
                  {new Date(lot.dateEntree).toLocaleDateString(("fr-FR"))}
                </td>
                <td className=" px-4 py-2 text-center">
                  {lot.dateReccup ? new Date(lot.dateReccup).toLocaleDateString(("fr-FR")) : "-"}
                </td>
                <td className=" px-4 py-2 text-right">
                  {lot.totalAmount?.toFixed(2) ?? "0.00"} FCFA
                </td>
                <td className=" px-4 py-2 text-right">
                  {lot.solde?.toFixed(2) ?? "0.00"} FCFA
                </td>
                <td className=" px-4 py-2 text-center capitalize">
    <span
      className={`inline-block px-2  rounded-full ${
        lot.statut === "en cours"
          ? "bg-red-500 text-white"
          : lot.statut === "pret"
          ? "bg-col2 text-black"
          : lot.statut === "livre"
          ? "bg-green-500 text-white"
          : "bg-gray-500 text-white"
      }`}
    >
      {lot.statut}
    </span>
  </td>
                {/* <td className=" px-4 py-2 text-center capitalize">{lot.statut}</td> */}
                <td className=" px-4 py-2 text-center">
                  <button
                    onClick={() => openPaiementModal(lot.idLot, lot.solde ?? 0)}
                    className=" bg-col2 text-black btn-xs rounded-[30px]  mr-1 hover:text-white hover:bg-col1"
                  >
                    Paiement
                  </button>
                  <button
                    className="btn bg-col1 text-white btn-xs btn-info mr-1"
                    onClick={() => router.push(`/lots/${lot.idLot}`)}
                  >
                    Detail
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

      {modalOpen && selectedLotId && (
        <PaiementModal
          lotId={selectedLotId}
          solde={selectedLotSolde}
          onClose={() => setModalOpen(false)}
          onPaiementAjoute={handlePaiementAjoute}
        />
      )}
    </div>
  );
}
