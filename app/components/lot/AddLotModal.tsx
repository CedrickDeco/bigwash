// // components/lot/AddLotModal.tsx
// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import VetementForm from "./VetementForm";

// import { RootState } from "../../../lib/store";
// import { CreateLotInput } from "../../../type/input/lotTypes.ts";
// import { useAppDispatch } from "../../../lib/store";
// import { fetchTypeVetements } from "../../features/typeVetement/typeVetementSlice";
// import { useReactToPrint } from "react-to-print";
// import TicketPrint from "../impression/TicketPrint";
// const LOGO_URL = "/public/logo_bigwash.jpg";

// interface Props {
// 	isOpen: boolean;
// 	onClose: () => void;
// 	// onSubmit: (data: CreateLotInput) => void;
// 	onSubmit: (data: CreateLotInput) => Promise<void>;
// 	clientLabel: string;
// 	dateReccup: string;
// }

// export default function AddLotModal({
// 	isOpen,
// 	onClose,
// 	onSubmit,
// 	clientLabel,
// 	dateReccup
// }: Props) {
// 	const dispatch = useAppDispatch();
// 	const [lotPrinted, setLotPrinted] = useState<any>(null);
// 	const [showTicketPreview, setShowTicketPreview] = useState(false);

// 	const ticketRef = useRef<HTMLDivElement>(null);

// 	const handlePrint = useReactToPrint(
// 		({
// 			content: () => ticketRef.current,
// 			documentTitle: "ticket",
// 			onAfterPrint: () => setLotPrinted(null)
// 		} as unknown) as Parameters<typeof useReactToPrint>[0]
// 	);

// 	const [paiementMontant, setPaiementMontant] = useState<number | undefined>(
// 		undefined
// 	);

// 	// ✅ Accès aux types de vêtements via le slice dédié
// 	const typesVetement = useSelector(
// 		(state: RootState) => state.typeVetement.items
// 	);

// 	const [vetementsLocal, setVetementsLocal] = useState<
// 		CreateLotInput["vetements"]
// 	>([]);

// 	// 🔁 Charger les types de vêtements une seule fois quand le modal s'ouvre
// 	useEffect(
// 		() => {
// 			if (isOpen && !typesVetement.length) {
// 				dispatch(fetchTypeVetements());
// 			}
// 		},
// 		[dispatch, isOpen]
// 	);

// 	//   useEffect(() => {
// 	// 	if (lotPrinted) {
// 	// 		const timeout = setTimeout(() => {
// 	// 			handlePrint?.();
// 	// 		}, 300); // Délai pour s'assurer que l'élément est monté

// 	// 		return () => clearTimeout(timeout);
// 	// 	}
// 	// }, [lotPrinted]);

// 	// useEffect(
// 	// 	() => {
// 	// 		if (lotPrinted && ticketRef.current) {
// 	// 			handlePrint();
// 	// 		}
// 	// 	},
// 	// 	[lotPrinted]
// 	// );

// 	// ✅ handleAddVetement
// 	const handleAddVetement = (vetement: CreateLotInput["vetements"][0]) => {
// 		setVetementsLocal([...vetementsLocal, vetement]);
// 	};

// 	// ✅ handleDeleteVetement
// 	const handleDeleteVetement = (index: number) => {
// 		setVetementsLocal(vetementsLocal.filter((_, i) => i !== index));
// 	};

// 	// ✅ handleUpdateVetement
// 	const handleUpdateVetement = (
// 		index: number,
// 		updatedVetement: CreateLotInput["vetements"][0]
// 	) => {
// 		const list = [...vetementsLocal];
// 		list[index] = updatedVetement;
// 		setVetementsLocal(list);
// 	};

// 	const handleSubmit = async () => {
// 		try {
// 			const newLot = await onSubmit({
// 				clientLabel,
// 				vetements: vetementsLocal,
// 				dateReccup,
// 				paiements: paiementMontant
// 					? [
// 							{
// 								montant: paiementMontant,
// 								date: new Date().toISOString()
// 							}
// 						]
// 					: []
// 			});
// 			setVetementsLocal([]);
// 			setLotPrinted(newLot);
// 			setShowTicketPreview(true);
// 			onClose();

// 			// ✅ Sauvegarder le nouveau lot localement
// 			// setLotPrinted(newLot);

// 			// // ✅ Déclencher l'impression après le rendu
// 			// setTimeout(() => {
// 			//   handlePrint();
// 			//   setLotPrinted(null);
// 			// }, 500); // délai pour s'assurer que le composant est bien monté
// 		} catch (err) {
// 			console.error("Erreur lors de la soumission :", err);
// 		}
// 	};

// 	if (!isOpen) return null;

// 	return (
// 		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// 			<div className="bg-white p-6 rounded w-3/4 max-h-[90vh] overflow-auto">
// 				<h2 className="text-xl font-bold mb-4">Ajouter un Lot</h2>

// 				{/* Formulaire de vêtement */}
// 				<VetementForm
// 					onAdd={handleAddVetement}
// 					vetements={vetementsLocal}
// 					onUpdate={handleUpdateVetement}
// 					onDelete={handleDeleteVetement}
// 					typesVetement={typesVetement}
// 					onChangeMontantVerse={setPaiementMontant}
// 				/>

// 				<div className="mt-4 flex justify-end space-x-2">
// 					<button
// 						onClick={onClose}
// 						className="px-4 py-2 bg-gray-300 rounded"
// 					>
// 						Annuler
// 					</button>
// 					<button
// 						onClick={handleSubmit}
// 						className="px-4 py-2 bg-green-500 text-white rounded"
// 					>
// 						Valider le lot
// 					</button>
// 				</div>
// 			</div>
// 			{/* Ticket invisible prêt à imprimer */}
// 			<div style={{ position: "absolute", top: "-10000px" }}>
// 				<TicketPrint
// 					ref={ticketRef}
// 					lot={lotPrinted}
// 					clientLabel={clientLabel}
// 					dateReccup={dateReccup}
// 					paiementMontant={paiementMontant}
// 					logoUrl={LOGO_URL}
// 				/>
// 			</div>
// 		</div>
// 	);
// }



import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VetementForm from "./VetementForm";
import { RootState } from "../../../lib/store";
import { CreateLotInput } from "../../../type/input/lotTypes.ts";
import { useAppDispatch } from "../../../lib/store";
import { fetchTypeVetements } from "../../features/typeVetement/typeVetementSlice";
import { useReactToPrint } from "react-to-print";
import TicketPrint from "../impression/TicketPrint";

const LOGO_URL = "/public/logo_bigwash.jpg";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateLotInput) => Promise<void>;
  clientLabel: string;
  dateReccup: string;
}

export default function AddLotModal({
  isOpen,
  onClose,
  onSubmit,
  clientLabel,
  dateReccup,
}: Props) {
  const dispatch = useAppDispatch();
  const [lotPrinted, setLotPrinted] = useState<any>(null);
  const [showTicketPreview, setShowTicketPreview] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
  ...( {
    content: () => ticketRef.current,
    documentTitle: "ticket",
    onAfterPrint: () => {
      setLotPrinted(null);
      setShowTicketPreview(false);
      onClose();
    }
  } as Parameters<typeof useReactToPrint>[0] )
});



  const [paiementMontant, setPaiementMontant] = useState<number | undefined>(
    undefined
  );

  const typesVetement = useSelector(
    (state: RootState) => state.typeVetement.items
  );

  const [vetementsLocal, setVetementsLocal] = useState<
    CreateLotInput["vetements"]
  >([]);

  useEffect(() => {
    if (isOpen && !typesVetement.length) {
      dispatch(fetchTypeVetements());
    }
  }, [dispatch, isOpen]);

  const handleAddVetement = (vetement: CreateLotInput["vetements"][0]) => {
    setVetementsLocal([...vetementsLocal, vetement]);
  };

  const handleDeleteVetement = (index: number) => {
    setVetementsLocal(vetementsLocal.filter((_, i) => i !== index));
  };

  const handleUpdateVetement = (
    index: number,
    updatedVetement: CreateLotInput["vetements"][0]
  ) => {
    const list = [...vetementsLocal];
    list[index] = updatedVetement;
    setVetementsLocal(list);
  };

  const handleSubmit = async () => {
    try {
      const newLot = await onSubmit({
        clientLabel,
        vetements: vetementsLocal,
        dateReccup,
        paiements: paiementMontant
          ? [
              {
                montant: paiementMontant,
                date: new Date().toISOString(),
              },
            ]
          : [],
      });

      setVetementsLocal([]);
      setLotPrinted(newLot);
      setShowTicketPreview(true);
    } catch (err) {
      console.error("Erreur lors de la soumission :", err);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal principal pour ajouter le lot */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
        <div className="bg-white p-6 rounded w-3/4 max-h-[90vh] overflow-auto">
          <h2 className="text-xl font-bold mb-4">Ajouter un Lot</h2>

          <VetementForm
            onAdd={handleAddVetement}
            vetements={vetementsLocal}
            onUpdate={handleUpdateVetement}
            onDelete={handleDeleteVetement}
            typesVetement={typesVetement}
            onChangeMontantVerse={setPaiementMontant}
          />

          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Annuler
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Valider le lot
            </button>
          </div>
        </div>
      </div>

      {/* Aperçu du ticket */}
      {showTicketPreview && lotPrinted && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <TicketPrint
              ref={ticketRef}
              lot={lotPrinted}
              clientLabel={clientLabel}
              dateReccup={dateReccup}
              paiementMontant={paiementMontant}
              logoUrl={LOGO_URL}
            />
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handlePrint?.()}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Imprimer
              </button>
              <button
                onClick={() => {
                  setShowTicketPreview(false);
                  setLotPrinted(null);
                }}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
