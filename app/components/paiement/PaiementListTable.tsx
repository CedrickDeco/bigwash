"use client";

import React, { useEffect, useState } from "react";
import PaiementModal from "./PaiementModal";
import { useAppDispatch, useAppSelector } from "../../../lib/store";
import { fetchLots } from "../../features/lot/lotSlice";
import { useRouter } from "next/navigation";
import type { LotFromApi } from "../../../type/api/lotTypes";

export default function PaiementListTable() {
  const dispatch = useAppDispatch();
  const { lots, loading } = useAppSelector((state) => state.lots);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLotId, setSelectedLotId] = useState<string | null>(null);
  const [selectedLotSolde, setSelectedLotSolde] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [selectedStatut, setSelectedStatut] = useState("");
  const [filtreSolde, setFiltreSolde] = useState(false);
  const [filtreSoldeZero, setFiltreSoldeZero] = useState(false);
  const [filteredLots, setFilteredLots] = useState<LotFromApi[]>([]);
  const [filtreActif, setFiltreActif] = useState(false);
  const perPage = 10;
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
    dispatch(fetchLots());
  };

  const lotsTries = [...lots].sort(
    (a, b) => new Date(b.dateEntree).getTime() - new Date(a.dateEntree).getTime()
  );

  const handleFiltre = () => {
    let resultatsFiltres = lotsTries;

    if (dateDebut && dateFin && selectedStatut) {
      const debut = new Date(dateDebut);
      const fin = new Date(dateFin);

      resultatsFiltres = resultatsFiltres.filter((lot) => {
        const entree = new Date(lot.dateEntree);
        const reccup = lot.dateReccup ? new Date(lot.dateReccup) : null;

        const inRange =
          (entree >= debut && entree <= fin) ||
          (reccup && reccup >= debut && reccup <= fin);

        return lot.statut === selectedStatut && inRange;
      });
    }

    if (filtreSolde) {
      resultatsFiltres = resultatsFiltres.filter((lot) => (lot.solde ?? 0) !== 0);
    }

    if (filtreSoldeZero) {
      resultatsFiltres = resultatsFiltres.filter((lot) => (lot.solde ?? 0) === 0);
    }

    setFilteredLots(resultatsFiltres);
    setFiltreActif(true);
    setPage(1);
  };

  const resetFiltre = () => {
    setFilteredLots([]);
    setFiltreActif(false);
    setDateDebut("");
    setDateFin("");
    setSelectedStatut("");
    setFiltreSolde(false);
    setFiltreSoldeZero(false);
    setPage(1);
  };

  const lotsAffiches = filtreActif ? filteredLots : lotsTries;
  const paginatedLots = lotsAffiches.slice((page - 1) * perPage, page * perPage);
  const pageCount = Math.ceil(lotsAffiches.length / perPage);

  const totalMontant = lotsAffiches.reduce((sum, lot) => sum + (lot.totalAmount ?? 0), 0);
  const totalSolde = lotsAffiches.reduce((sum, lot) => sum + (lot.solde ?? 0), 0);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Commandes</h2>

      {/* Filtres */}
      <div className="space-y-2 bg-white p-4 rounded shadow mb-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium">Statut</label>
            <select
              value={selectedStatut}
              onChange={(e) => setSelectedStatut(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">-- Choisir --</option>
              <option value="en cours">En cours</option>
              <option value="pret">Prêt</option>
              <option value="livre">Livré</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Date Entrée</label>
            <input
              type="date"
              value={dateDebut}
              onChange={(e) => setDateDebut(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Date Récupération</label>
            <input
              type="date"
              value={dateFin}
              onChange={(e) => setDateFin(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <button
              onClick={handleFiltre}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              OK
            </button>
          </div>

          <div>
            <button
              onClick={resetFiltre}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 w-full"
            >
              Réinitialiser
            </button>
          </div>
        </div>

        {/* Checkboxes supplémentaires */}
        <div className="flex items-center space-x-6 mt-2">
          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filtreSolde}
              onChange={(e) => {
                setFiltreSolde(e.target.checked);
                if (e.target.checked) setFiltreSoldeZero(false);
              }}
              className="form-checkbox"
            />
            <span className="text-sm">Afficher uniquement les lots avec solde ≠ 0</span>
          </label>

          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filtreSoldeZero}
              onChange={(e) => {
                setFiltreSoldeZero(e.target.checked);
                if (e.target.checked) setFiltreSolde(false);
              }}
              className="form-checkbox"
            />
            <span className="text-sm">Afficher uniquement les lots avec solde = 0</span>
          </label>
        </div>
      </div>

      <table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
        <thead className="bg-white">
          <tr>
            <th className="px-4 py-2">Date Entrée</th>
            <th className="px-4 py-2">Date Récupération</th>
            <th className="px-4 py-2">Client</th>
            <th className="px-4 py-2">Montant Total</th>
            <th className="px-4 py-2">Solde</th>
            <th className="px-4 py-2">Statut</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6} className="text-center py-4">Chargement...</td>
            </tr>
          ) : paginatedLots.length > 0 ? (
            paginatedLots.map((lot) => (
              <tr key={lot.idLot} className="border-b hover:bg-gray-100 transition">
                <td className="px-4 py-2 text-center">
                  {new Date(lot.dateEntree).toLocaleDateString("fr-FR")}
                </td>
                <td className="px-4 py-2 text-center">
                  {lot.dateReccup ? new Date(lot.dateReccup).toLocaleDateString("fr-FR") : "-"}
                </td>
                <td className="px-4 py-2 text-center">{lot.client.nom} </td>
                <td className="px-4 py-2 text-center">{lot.totalAmount?.toFixed(0) ?? "0"} FCFA</td>
                <td className="px-4 py-2 text-center">{lot.solde?.toFixed(0) ?? "0"} FCFA</td>
                <td className="px-4 py-2 text-center capitalize">
                  <span className={`inline-block px-2 rounded-full ${
                    lot.statut === "en cours" ? "bg-red-500 text-white"
                    : lot.statut === "pret" ? "bg-col2 text-black"
                    : lot.statut === "livre" ? "bg-green-500 text-white"
                    : "bg-gray-500 text-white"
                  }`}>
                    {lot.statut}
                  </span>
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => openPaiementModal(lot.idLot, lot.solde ?? 0)}
                    className="bg-col2 text-black btn-xs rounded-[30px] mr-1 hover:text-white hover:bg-yellow-600"
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

      <div className="mt-4 flex justify-end gap-10 font-semibold text-sm text-right">
        <p>Total Montant : {totalMontant.toFixed(0)} FCFA</p>
        <p>Total Solde : {totalSolde.toFixed(0)} FCFA</p>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            className={`btn btn-sm ${page === i + 1 ? "btn-primary" : ""}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

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
