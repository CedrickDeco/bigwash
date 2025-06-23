export interface CreateVetementInput {
  typeLabel: string;
  description: string;
  statut?: string;
  prixOverride?: number;
}

export interface PaiementInput {
  montant: number;
  date: string;
}

export interface CreateLotInput {
  clientLabel: string;
  vetements: CreateVetementInput[];
  paiements: PaiementInput[]; // ✅ Liste de paiements
  dateReccup: string;
  statut?: string;
}

export interface UpdateLotInput extends CreateLotInput {
  idLot: string;
}
