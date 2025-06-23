"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../lib/store";
import { fetchClientById } from "../../features/client/clientSlice";
import LotListTable from "../../components/clients/LotListTable";
import { useParams } from "next/navigation";

type Client = {
  idClient: string;
  nom: string;
  nbreLots: number;
  montantTotal: number;
  lots?: Lot[];
};

type Lot = {
  id: string;
  reference: string;
  dateCreation: string;
  montant: number;
};

export default function ClientDashboard() {
  const params = useParams();
  const id = params?.id as string;

  const dispatch = useAppDispatch();

  const [client, setClient] = useState<Client | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "succeeded" | "failed">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setStatus("loading");
      dispatch(fetchClientById(id))
        .unwrap()
        .then((data) => {
          setClient(data);
          setStatus("succeeded");
        })
        .catch((err) => {
          setError(err.message || "Erreur lors du chargement du client");
          setStatus("failed");
        });
    }
  }, [dispatch, id]);

  if (status === "loading") return <p>Chargement...</p>;
  if (status === "failed") return <p>Erreur : {error}</p>;
  if (!client) return <p>Client non trouvé</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        État du client <span className="capitalize">{client.nom}</span>
      </h1>
      <p>Nombre total de lots : {client.lots?.length || 0}</p>
      <p>Montant total de tous les lots : {client.montantTotal.toFixed(0)} FCFA</p>
      <LotListTable lots={client.lots || []} />
    </div>
  );
}
