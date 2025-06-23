"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

interface PaiementModalProps {
  lotId: string;
  solde: number;
  onClose: () => void;
  onPaiementAjoute: () => void;
}

export default function PaiementModal({
  lotId,
  solde,
  onClose,
  onPaiementAjoute,
}: PaiementModalProps) {
  const [montant, setMontant] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const montantNum = parseFloat(montant);
    if (isNaN(montantNum) || montantNum <= 0) {
      setError("Montant invalide");
      return;
    }
    if (montantNum > solde) {
      setError(`Le montant ne peut pas dépasser le solde (${solde.toFixed(2)})`);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/paiement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lotId, montant: montantNum, date }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Erreur serveur");
        setLoading(false);
        return;
      }

      // ✅ Afficher un toast de confirmation
      toast.success("Paiement effectué avec succès");

      // ✅ Rafraîchir les données dans le parent
      onPaiementAjoute();

      // ✅ Fermer la modale après un court délai pour laisser voir le toast
      setTimeout(() => {
        onClose();
      }, 300); // 300 ms pour laisser voir le toast

    } catch {
      setError("Erreur réseau");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: 20,
          borderRadius: 8,
          minWidth: 320,
        }}
      >
        <h3>Ajouter un paiement</h3>
        <p>Solde restant: {solde.toFixed(2)} FCFA</p>
        <div style={{ marginBottom: 10 }}>
          <label>
            Montant:
            <input
              type="number"
              step="0.01"
              min="0.01"
              max={solde}
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              required
              style={{ marginLeft: 10, width: "100%" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              style={{ marginLeft: 10 }}
            />
          </label>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button type="button" onClick={onClose} disabled={loading}>
            Annuler
          </button>
          <button type="submit" disabled={loading}>
            {loading ? "Envoi..." : "Valider"}
          </button>
        </div>
      </form>
    </div>
  );
}







// "use client";

// import React, { useState } from "react";

// interface PaiementModalProps {
//   lotId: string;
//   solde: number;
//   onClose: () => void;
//   onPaiementAjoute: () => void;
// }

// export default function PaiementModal({
//   lotId,
//   solde,
//   onClose,
//   onPaiementAjoute,
// }: PaiementModalProps) {
//   const [montant, setMontant] = useState("");
//   const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     const montantNum = parseFloat(montant);
//     if (isNaN(montantNum) || montantNum <= 0) {
//       setError("Montant invalide");
//       return;
//     }
//     if (montantNum > solde) {
//       setError(`Le montant ne peut pas dépasser le solde (${solde.toFixed(2)})`);
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch("/api/paiement", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ lotId, montant: montantNum, date }),
//       });

//       const data = await res.json();
//       if (!res.ok) {
//         setError(data.error || "Erreur serveur");
//         setLoading(false);
//         return;
//       }
//       toast.success("Paiement effectué avec succès");

//       onPaiementAjoute(); // ✅ appeler le callback du parent
//       setLoading(false);
//       onClose();
//     } catch {
//       setError("Erreur réseau");
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         backgroundColor: "rgba(0,0,0,0.5)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 1000,
//       }}
//       onClick={onClose}
//     >
//       <form
//         onClick={(e) => e.stopPropagation()}
//         onSubmit={handleSubmit}
//         style={{
//           background: "white",
//           padding: 20,
//           borderRadius: 8,
//           minWidth: 320,
//         }}
//       >
//         <h3>Ajouter un paiement</h3>
//         <p>Solde restant: {solde.toFixed(2)} FCFA</p>
//         <div style={{ marginBottom: 10 }}>
//           <label>
//             Montant:
//             <input
//               type="number"
//               step="0.01"
//               min="0.01"
//               max={solde}
//               value={montant}
//               onChange={(e) => setMontant(e.target.value)}
//               required
//               style={{ marginLeft: 10, width: "100%" }}
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: 10 }}>
//           <label>
//             Date:
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//               style={{ marginLeft: 10 }}
//             />
//           </label>
//         </div>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
//           <button type="button" onClick={onClose} disabled={loading}>
//             Annuler
//           </button>
//           <button type="submit" disabled={loading}>
//             {loading ? "Envoi..." : "Valider"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }