// components/lot/VetementForm.tsx
import React, { useState } from "react";
import { CreateVetementInput } from "../../../type/input/lotTypes.ts";

interface Props {
  onAdd: (v: CreateVetementInput) => void;
  vetements: CreateVetementInput[];
  onUpdate: (index: number, v: CreateVetementInput) => void;
  onDelete: (index: number) => void;
  typesVetement: {
    idType: string;
    nom: string;
    prix: number;
    etat: string;
  }[];
  onChangeMontantVerse?: (value: number | undefined) => void;
}

export default function VetementForm({
  onAdd,
  vetements,
  onUpdate,
  onDelete,
  typesVetement,
  onChangeMontantVerse
}: Props) {
  const [typeLabel, setTypeLabel] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [statut, setStatut] = useState<string>("en cours");
  const [prixOverride, setPrixOverride] = useState<number | undefined>(undefined);
  

  // 💵 Paiement local – Pas envoyé dans `onAdd`, mais utilisé dans le parent
  const [montantVerse, setMontantVerse] = useState<number | undefined>(undefined);

  // 🔍 Trouver le type sélectionné
  const selectedType = typesVetement.find((t) => t.nom === typeLabel);
  const price = prixOverride ?? selectedType?.prix ?? 0;

  const handleAdd = () => {
    if (!typeLabel || !description) return;

    onAdd({
      typeLabel,
      description,
      statut,
      prixOverride,
    });

    setTypeLabel("");
    setDescription("");
    setStatut("en cours");
    setPrixOverride(undefined);
  };

  // 💰 Calcul du montant total à payer
  const montantAPayer = vetements.reduce((acc, v) => {
    const itemPrice =
      v.prixOverride !== undefined
        ? v.prixOverride
        : typesVetement.find((t) => t.nom === v.typeLabel)?.prix ?? 0;
    return acc + itemPrice;
  }, 0);

  return (
    <div>
      <div className="mb-4">
        {/* Sélection du type */}
        <label htmlFor="type-select" className="block mb-2 font-semibold">
          Type de vêtement
        </label>
        <select
          id="type-select"
          value={typeLabel}
          onChange={(e) => setTypeLabel(e.target.value)}
          className="w-full border p-2 rounded mb-2"
        >
          <option value="">Sélectionnez un type</option>
          {typesVetement.map((t) => (
            <option key={t.idType} value={t.nom}>
              {t.nom} - {t.prix} FCFA
            </option>
          ))}
        </select>

        {/* Description */}
        <label className="block mb-2 font-semibold">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description du vêtement"
          className="w-full border p-2 mb-2 rounded"
        />

        {/* Statut */}
        <label className="block mb-2 font-semibold">Statut</label>
        <select
          value={statut}
          onChange={(e) => setStatut(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        >
          <option value="en cours">En cours</option>
          <option value="pret">Prêt</option>
          <option value="retire">Retiré</option>
        </select>

        {/* Prix */}
        <label className="block mb-2 font-semibold">Prix unitaire</label>
        <input
          type="number"
          step="0.01"
          value={prixOverride ?? ""}
          onChange={(e) =>
            setPrixOverride(e.target.value ? parseFloat(e.target.value) : undefined)
          }
          placeholder={`${selectedType?.prix ?? 0} FCFA`}
          className="w-full border p-2 mb-2 rounded"
        />

        {/* Bouton d'ajout */}
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          ➕ Ajouter au tableau
        </button>
      </div>

      {/* Tableau des vêtements ajoutés */}
      {vetements.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Liste des vêtements</h3>

          {/* Champ local : Montant à payer */}
          <div className="mb-4">
            <p className="text-lg font-bold">
              🧾 Montant à payer :{" "}
              <span className="text-green-600">{montantAPayer.toFixed(2)} FCFA</span>
            </p>
          </div>

          {/* Champ local : Montant payé */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Montant versé par le client</label>
            <input
              type="number"
              step="0.01"
              value={montantVerse ?? ""}
              onChange={(e) => {
    const value = e.target.value ? parseFloat(e.target.value) : undefined;
    setMontantVerse(value);
    if (onChangeMontantVerse) {
      onChangeMontantVerse(value); // ✅ Envoie la valeur au parent
    }
  }}
              placeholder="Montant versé"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Tableau des vêtements */}
          <table className="w-full border-collapse bg-white shadow-sm mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th>Type</th>
                <th>Description</th>
                <th>Prix</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vetements.map((v, index) => {
                const itemPrice =
                  v.prixOverride !== undefined
                    ? v.prixOverride
                    : typesVetement.find((t) => t.nom === v.typeLabel)?.prix ?? 0;

                return (
                  <tr key={index} className="border-t">
                    <td>{v.typeLabel}</td>
                    <td>{v.description}</td>
                    <td>{itemPrice.toFixed(2)} FCFA</td>
                    <td>{v.statut}</td>
                    <td>
                      <button
                        onClick={() => onUpdate(index, v)}
                        className="text-blue-500 mr-2"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => onDelete(index)}
                        className="text-red-500"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
