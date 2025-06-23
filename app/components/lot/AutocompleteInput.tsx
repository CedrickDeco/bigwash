// components/ui/AutocompleteInput.tsx
import React, { useState, useEffect } from "react";
import { fetchClientsForAutocomplete } from "../../features/lot/lotSlice";
import { useAppSelector, useAppDispatch } from "../../../lib/store";
import { Client } from "../../../type/type";

interface Props {
  placeholder?: string;
  onSelect: (clientName: string) => void;
}

export default function AutocompleteInput({
  placeholder = "Rechercher...",
  onSelect,
}: Props) {
  const dispatch = useAppDispatch();
  const { clients } = useAppSelector((state) => state.lots);
  const [query, setQuery] = useState("");
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    dispatch(fetchClientsForAutocomplete());
  }, []);

  useEffect(() => {
    if (!query && isFocused) {
      setFilteredClients(clients);
    } else if (query) {
      const filtered = clients.filter((c: Client) =>
        c.nom?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredClients(filtered);
    } else {
      setFilteredClients([]);
    }
  }, [query, isFocused, clients]);

  const handleSelect = (name: string) => {
    setQuery(name);
    onSelect(name);
    setFilteredClients([]);
    setIsFocused(false);
  };

  return (
    <div className="relative mt-8">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)}
        placeholder={placeholder}
        className="w-full border p-2 rounded"
      />

      {/* Liste des résultats conditionnelle */}
      {isFocused && (filteredClients.length > 0 || query) && (
        <ul className="absolute z-10 mt-1 w-full border max-h-40 overflow-y-auto bg-white rounded shadow">
          {filteredClients.length === 0 && query && (
            <li className="p-2 text-gray-500">Aucun client trouvé</li>
          )}
          {filteredClients.map((client: Client) => (
            <li
              key={client.idClient}
              onMouseDown={(e) => {
              e.preventDefault();
              handleSelect(client.nom);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
             {client?.nom || "Client inconnu"}
            </li>
            // <li
            //   key={client.idClient}
            //   onClick={() => handleSelect(client.nom)}
            //   className="p-2 hover:bg-gray-100 cursor-pointer"
            // >
            //   {client?.nom || "Client inconnu"}
            // </li>
          ))}
        </ul>
      )}
    </div>
  );
}





// // components/ui/AutocompleteInput.tsx
// import React, { useState, useEffect } from "react";

// // Thunk pour charger les clients
// import { fetchClientsForAutocomplete } from "../../features/lot/lotSlice";

// // Hooks personnalisés
// import { useAppSelector, useAppDispatch } from "../../../lib/store";
// import { Client } from "../../../type/type";

// interface Props {
// 	placeholder?: string;
// 	onSelect: (clientName: string) => void;
// }

// export default function AutocompleteInput({
// 	placeholder = "Rechercher...",
// 	onSelect
// }: Props) {
// 	const dispatch = useAppDispatch();
// 	const { clients } = useAppSelector(state => state.lots); // ✅ Accès aux clients via le store
// 	const [query, setQuery] = useState("");
//   const [filteredClients, setFilteredClients] = useState<Client[]>([]);
//    const [isFocused, setIsFocused] = useState(false);

// 	// Charger les clients depuis l’API au montage
// 	useEffect(() => {
// 		dispatch(fetchClientsForAutocomplete());
// 	}, []);

//   // Filtrer les clients localement
//   useEffect(() => {
//     if (!query && isFocused) {
//       // ✅ Si input vide mais utilisateur est en train de chercher
//       setFilteredClients(clients); // ✅ Montre tous les clients
//     } else if (query) {
//       const filtered = clients.filter((c: Client) =>
//         c.nom?.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredClients(filtered);
//     } else {
//       setFilteredClients([]); // 🚫 Aucune liste affichée par défaut
//     }
//   }, [query, isFocused, clients]);

// 	const handleSelect = (name: string) => {
// 		setQuery(name);
// 		onSelect(name);
// 	};

// 	return (
// 		<div>
// 			<input
// 				value={query}
// 				onChange={e => setQuery(e.target.value)}
// 				placeholder={placeholder}
// 				className="w-full border p-2 rounded mt-8"
// 			/>

//       {/* Liste des résultats */}
//       {(filteredClients.length > 0 || query) && (
//   <ul className="mt-2 border-t max-h-40 overflow-y-auto">
//     {filteredClients.length === 0 && query && (
//       <li className="p-2 text-gray-500">Aucun client trouvé</li>
//     )}
//     {filteredClients.map((client: Client) => (
//       <li
//         key={client.idClient}
//         onClick={() => handleSelect(client.nom)}
//         className="p-2 hover:bg-gray-100 cursor-pointer"
//       >
//         {client?.nom || "Client inconnu"}
//       </li>
//     ))}
//   </ul>
// )}
// </div>
// 	);
// }
