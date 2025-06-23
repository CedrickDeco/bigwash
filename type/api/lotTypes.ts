import { TypeVetement, Client, Paiement } from '../type';


export interface VetementFromApi {
  idVetement: string;
  description: string;
  statut: string;
  typeId: string;
  lotId: string;
  type: TypeVetement;
  prix?: number; // Champ ajouté pour affichage
}

export interface LotFromApi {
  idLot: string;
  dateEntree: Date;
  dateReccup: string;
  totalAmount: number;
  solde: number;
  statut: string;
  clientId: string;
  client: Client;
  vetements: VetementFromApi[];
  paiements: Paiement[];
  totalPaid?: number;
  remaining?: number;
}