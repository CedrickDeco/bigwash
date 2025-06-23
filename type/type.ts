// Pour la création d’un client
export interface CreateClientInput {
  nom: string;
  telephone?: string | null;
}

export interface Client {
  idClient: string;
  nom: string;
  telephone?: string;
}

export interface TypeVetement {
  idType: string;
  nom: string;
  prix: number;
  etat: string;
}

export interface Vetement {
  idVetement: string;
  description: string;
  statut: string;
  typeId: string;
  type: TypeVetement;
  lotId: string;
  prix?: number;
}

export interface Lot {
  idLot: string;
  dateEntree: Date;
  dateReccup: string;
  totalAmount: number;
  solde: number;
  statut: string;
  clientId: string;
  client: Client;
  vetements: Vetement[];
  paiements: Paiement[];
}

export interface Paiement {
  idPaiement: string;
  montant: number;
  date: string;
  lotId: string;
}