// import React from "react";

// interface Props {
//   lot: any;
//   clientLabel: string;
//   dateReccup: string;
//   paiementMontant?: number;
//   logoUrl?: string;
// }

// const TicketPrint = React.forwardRef<HTMLDivElement, Props>(
//   ({ lot, clientLabel, dateReccup, paiementMontant, logoUrl }, ref) => {
//     if (!lot || !lot.vetements) return null;

//     const totalAmount = lot.vetements.reduce(
//       (sum: number, v: any) => sum + (v.prix ?? v.type?.prix ?? 0),
//       0
//     );

//     const paid = paiementMontant ? parseFloat(paiementMontant.toString()) : 0;
//     const remaining = Math.max(0, totalAmount - paid);

//     return (
//       <div ref={ref} className="p-4 text-sm font-mono w-[300px]">
//         <div className="text-center mb-4">
//           <img src={logoUrl || "/logo_bigwash.jpg"} alt="Logo" className="h-12 mx-auto mb-2" />
//           <h2 className="text-lg font-bold">Ticket de Caisse</h2>
//         </div>

//         <p><strong>Client :</strong> {clientLabel}</p>
//         <p><strong>Date entrée :</strong> {new Date(lot.dateEntree).toLocaleDateString("fr-FR")}</p>
//         <p><strong>Date récupération :</strong> {dateReccup ? new Date(dateReccup).toLocaleDateString("fr-FR") : "-"}</p>

//         <hr className="my-2" />

//         <p className="font-semibold mb-1">Articles :</p>
//         <ul>
//           {lot.vetements.map((v: any, idx: number) => (
//             <li key={idx}>
//               - {v.type.nom} : {v.prix?.toFixed(0) ?? v.type.prix.toFixed(0)} FCFA
//             </li>
//           ))}
//         </ul>

//         <hr className="my-2" />

//         <p><strong>Total :</strong> {totalAmount.toFixed(0)} FCFA</p>
//         <p><strong>Payé :</strong> {paiementMontant?.toFixed(0) ?? "0"} FCFA</p>
//         <p><strong>Solde :</strong> {remaining.toFixed(0)} FCFA</p>

//         <hr className="my-2" />

//         <p className="text-center mt-4">Merci pour votre confiance !</p>
//       </div>
//     );
//   }
// );

// TicketPrint.displayName = "TicketPrint";

// export default TicketPrint;


import React from "react";

interface Props {
  lot: any;
  clientLabel: string;
  dateReccup: string;
  paiementMontant?: number;
  logoUrl?: string;
}

const TicketPrint = React.forwardRef<HTMLDivElement, Props>(
  ({ lot, clientLabel, dateReccup, paiementMontant, logoUrl }, ref) => {
    if (!lot || !lot.vetements) return null;

    const totalAmount = lot.vetements.reduce(
      (sum: number, v: any) => sum + (v.prix ?? v.type?.prix ?? 0),
      0
    );

    const paid = paiementMontant ? parseFloat(paiementMontant.toString()) : 0;
    const remaining = Math.max(0, totalAmount - paid);

    return (
      <div ref={ref} className="p-4 text-sm font-mono w-[300px]">
        <div className="text-center mb-4">
          <img
            src={logoUrl || "/logo_bigwash.jpg"}
            alt="Logo"
            className="h-12 mx-auto mb-2"
          />
          <h2 className="text-lg font-bold">Ticket de Caisse</h2>
        </div>

        <p>
          <strong>Client :</strong> {clientLabel}
        </p>
        <p>
          <strong>Date entrée :</strong>{" "}
          {new Date(lot.dateEntree).toLocaleDateString("fr-FR")}
        </p>
        <p>
          <strong>Date récupération :</strong>{" "}
          {dateReccup
            ? new Date(dateReccup).toLocaleDateString("fr-FR")
            : "-"}
        </p>

        <hr className="my-2" />

        <p className="font-semibold mb-1">Articles :</p>
        <ul>
          {lot.vetements.map((v: any, idx: number) => (
            <li key={idx}>
              - {v.type.nom} :{" "}
              {v.prix?.toFixed(0) ?? v.type.prix.toFixed(0)} FCFA
            </li>
          ))}
        </ul>

        <hr className="my-2" />

        <p>
          <strong>Total :</strong> {totalAmount.toFixed(0)} FCFA
        </p>
        <p>
          <strong>Payé :</strong>{" "}
          {paiementMontant?.toFixed(0) ?? "0"} FCFA
        </p>
        <p>
          <strong>Solde :</strong> {remaining.toFixed(0)} FCFA
        </p>

        <hr className="my-2" />

        <p className="text-center mt-4">Merci pour votre confiance !</p>
      </div>
    );
  }
);

TicketPrint.displayName = "TicketPrint";

export default TicketPrint;
