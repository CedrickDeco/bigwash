"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchClients } from "../../features/client/clientSlice";
import Link from "next/link";
import ClientFormModal from "./ClientFormModal";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { useRouter } from "next/navigation";



export default function ClientListTable() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { clients, status } = useSelector((state: any) => state.clients);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { items, loading } = useAppSelector(state => state.typeVetement);
  const [page, setPage] = useState(1);
  const perPage = 10;


  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  

  useEffect(() => {
  console.log("valeur de clients après chargement ===>", clients);
  }, [clients]);
  
  const handleSave = () => {
    dispatch(fetchClients());
    setIsModalOpen(false);
  };

  const paginatedClient = clients.slice((page - 1) * perPage, page * perPage);
	const pageCount = Math.ceil(clients.length / perPage);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <div className="flex justify-end px-[10%] mb-10">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="btn bg-col1 border border-solid border-col2 shadow-[0px_10px_15px_-5px_rgba(0,0,0,0.3)] rounded-[20px] transition-colors duration-300 ease-in-out hover:bg-col2 hover:text-col1 hover:border-solid border-col1 text-white"
        >
          Ajouter un client
        </button>
      </div>

      {status === "loading" && <p>Chargement...</p>}
      {status === "failed" && <p>Erreur de chargement</p>}

      {/* <table className="min-w-full table-auto border-collapse"> */}
      <table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
        <thead className="bg-white">
          <tr className="">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Téléphone</th>
            <th className="px-4 py-2">Créé par</th>
            <th className="px-4 py-2">Nbre de lots</th>
            <th className="px-4 py-2">Montant total</th>
          </tr>
        </thead>
        <tbody>
          {paginatedClient.map((client: any, index: number) => (
          <tr
            key={client.id}
            onClick={() => router.push(`/customer/${client.id}`)}
            className="border-b hover:bg-gray-100 cursor-pointer"
          >
            <td className=" px-4 py-2 text-center">{index + 1}</td>
            <td className="px-4 py-2 text-center">{client.nom}</td>
            <td className="px-4 py-2 text-center">{client.telephone || "-"}</td>
            <td className="px-4 py-2 text-center">{client.user?.nom || "Non attribué"}</td>
            <td className="px-4 py-2 text-center">{client.nbreLots}</td>
            <td className="px-4 py-2 text-center">
              {client.montantTotal?.toFixed(0) || "0"} FCFA
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

      {isModalOpen && <ClientFormModal onClose={handleSave} />}
    </div>
  );
}
