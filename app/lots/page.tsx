// app/lots/page.tsx
'use client';
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/store";

import AddLotModal from "../components/lot/AddLotModal";
import DatePicker from "../components/lot/DatePicker";
import AutocompleteInput from "../components/lot/AutocompleteInput";
import { fetchLots, createLot, deleteLot, getLotById } from "../features/lot/lotSlice";
import { LotFromApi } from "../../type/api/lotTypes";
import { CreateLotInput } from "../../type/input/lotTypes.ts";
import { toast } from "react-hot-toast";
import { Lot } from "../../type/type";
import EditLotModal from "../components/lot/EditLotModal";



export default function LotsPage() {
  const dispatch = useAppDispatch();
  const { lots, loading, error } = useAppSelector((state) => state.lots);
  const { clients, status } = useAppSelector((state: any) => state.clients);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientLabel, setClientLabel] = useState("");
  const [dateReccup, setDateReccup] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null);
  const { items } = useAppSelector(state => state.typeVetement);
  const [page, setPage] = useState(1);
  const perPage = 10;

  // Charger tous les lots au montage
  useEffect(() => {
    dispatch(fetchLots());
  }, []);


const handleSubmit = async (data: CreateLotInput) => {
  try {
    await dispatch(
      createLot({
        ...data,
        statut: "en cours",
      })
    ).unwrap(); // 🔥 permet de capturer les erreurs de manière propre avec try/catch

    toast.success("Lot enregistré avec succès !");
    setIsModalOpen(false);

    // Réinitialisation des champs
    setClientLabel("");
    setDateReccup("");
  } catch (err) {
    toast.error("Erreur lors de l'enregistrement du lot.");
    console.error(err);
  }
};

const handleDelete = async (idLot: string) => {
  const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce lot ?");
  if (!confirmDelete) return;

  try {
    await dispatch(deleteLot(idLot)).unwrap();
    toast.success("Lot supprimé avec succès !");
  } catch (error) {
    toast.error("Erreur lors de la suppression du lot.");
    console.error(error);
  }
};

// const openEditModal = (lot: Lot) => {
//   setSelectedLot(lot);
//   setIsEditModalOpen(true);
// };
// const closeEditModal = () => {
//   setSelectedLot(null);
//   setIsEditModalOpen(false);
// };

const sortedLots = [...lots].sort((a, b) => {
  return new Date(b.dateEntree).getTime() - new Date(a.dateEntree).getTime();
});

  
const paginatedLots = sortedLots.slice((page - 1) * perPage, page * perPage);
const pageCount = Math.ceil(lots.length / perPage);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestion des Lots</h1>

      {/* Barre de recherche client + date + bouton ajouter */}
      <div className="flex justify-between mb-4">
        <AutocompleteInput onSelect={setClientLabel} />
        <DatePicker onChange={setDateReccup} />
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn bg-col1 border border-solid border-col2 shadow-[0px_10px_15px_-5px_rgba(0,0,0,0.3)] rounded-[20px] transition-colors duration-300 ease-in-out hover:bg-col2 hover:text-col1 hover:border-solid border-col1 text-white mt-7"
        >
          + Ajouter
        </button>
      </div>

      {/* Affichage erreur globale */}
      {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}
      {status === "loading" && <p>Chargement...</p>}
      {status === "failed" && <p>Erreur de chargement</p>}

      {/* Tableau des lots */}
      <table className="w-full table">
        <thead className="bg-white text-black text-[1rem] font-bold" >
          <tr className="">
            <th className="">N⁰</th>
            <th>Nom Client</th>
            <th>Entrée</th>
            <th>Reccupération</th>
            <th>Total</th>
            <th>Solde</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedLots.map((lot: LotFromApi, index: number) => (
            <tr key={lot.idLot} className="hover:bg-gray-100 cursor-pointer">
              <td className="">{index + 1}</td>
              <td>{lot.client.nom}</td>
              <td>{new Date(lot.dateEntree).toLocaleDateString("fr-FR")}</td>
              <td>{new Date(lot.dateReccup).toLocaleDateString("fr-FR")}</td>
              <td>{lot.totalAmount.toFixed(0)} FCFA</td>
              <td>{lot.solde?.toFixed(0) ?? "0"} FCFA</td>
              <td>{lot.statut}</td>
              <td>
                {/* <button
                  className="btn bg-col1 text-white btn-xs btn-info mr-1"
                  // onClick={() => handleEdit(lot.idLot)}
                  onClick={() => openEditModal(lot)}
                >
                  Modifier
                </button> */}
                <button
                  className="btn btn-xs btn-error text-white"
                  onClick={() => handleDelete(lot.idLot)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
				<div className="flex justify-center space-x-2 mt-4">
					{Array.from({ length: pageCount }, (_, i) =>
						<button
							key={i}
							className={`btn btn-sm ${page === i + 1
								? "btn-primary"
								: ""}`}
							onClick={() => setPage(i + 1)}
						>
							{i + 1}
						</button>
					)}
      </div>

      {/* Modal de modification d'un lot */}
      {/* {isEditModalOpen && selectedLot && (
        <EditLotModal lot={selectedLot} onClose={closeEditModal} />
      )} */}

      {/* Modal d’ajout de lot */}
      {isModalOpen && (
        <AddLotModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          clientLabel={clientLabel}
          dateReccup={dateReccup}
        />
      )}
    </div>
  );
}
