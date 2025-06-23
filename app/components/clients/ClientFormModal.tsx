'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '../../../lib/hooks'; // ✅ Hook typé
import { createClient, updateClient } from '../../features/client/clientSlice';
import { useAuth } from '@clerk/nextjs';

interface Props {
  onClose: () => void;
  initialData?: {
    idClient: string;
    nom: string;
    telephone?: string;
  };
}

export default function ClientFormModal({ onClose, initialData }: Props) {
  const dispatch = useAppDispatch();
  const [nom, setNom] = useState(initialData?.nom || '');
  const [telephone, setTelephone] = useState(initialData?.telephone || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData) {
      await dispatch(updateClient({ id: initialData.idClient, data: { nom, telephone } }));
    } else {
      await dispatch(createClient({ nom, telephone}));
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="home-container w-[80%] max-w-4xl bg-white rounded-[30px] overflow-hidden shadow-2xl">
        <div className="content flex">
          {/* Left Section */}
          <div className="left bg-gradient-to-br from-blue-600 to-indigo-700 w-1/2 p-8 text-white">
            <div className="left-container h-full flex flex-col justify-between">
              <div className="up mt-10">
                <p className="text-justify">
                  Chez BIGWASH, la propreté et l'éclat de vos vêtements sont assurés.
                  Faites confiance à notre expertise pour un lavage irréprochable.
                </p>
              </div>
              <div className="down">
                <div className="logo-container">
                  <img
                    src="/logo_bigwash.jpg"
                    alt="Logo BigWash"
                    className="rounded-[20px] w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right w-1/2 bg-white -ml-7 rounded-[30px] p-8">
            <div className="right-container">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {initialData ? 'Modifier le client' : 'Créer un nouveau client'}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Nom</label>
                  <input
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Nom"
                    required
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Téléphone</label>
                  <input
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="Téléphone"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




// "use client";
// import React from "react";
// import "./newUserComponent.scss";
// import CreateUser from "../createUser/CreateUser";

// interface Props {
//   onClose: () => void;
//   initialData?: {
//     idClient: string;
//     nom: string;
//     telephone?: string;
//   };
// }

// export default function NewClientComponent() {
// 	return (
// 		<div>
// 			<div className="home-container">
// 				<div className="content w-[70%] ">
// 					<div className="left bg-col1">
// 						<div className="left-container">
// 							<div className="up mt-[10%] px-5">
// 								<div className="text-container p-2">
// 									<p className="text-justify text-white">
// 										Chez BIGWASH, la propreté et l'éclat de
// 										vos vêtements est assuré
// 									</p>
// 								</div>
// 							</div>
// 							<div className="down px-5">
// 								<div className="logo-container">
// 									<img
// 										src="/logo_bigwash.jpg"
// 										alt="Logo"
// 										className="rounded-[20px] "
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="right bg-white -ml-7 rounded-[30px]">
// 						<div className="right-container">
// 							<CreateUser />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
