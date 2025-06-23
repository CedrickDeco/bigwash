import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Paiement {
  idPaiement: string;
  montant: number;
  date: string;
}

interface PaiementState {
  paiements: Paiement[];
  totalPaid: number;
  solde: number;
  loading: boolean;
  error: string | null;
}

const initialState: PaiementState = {
  paiements: [],
  totalPaid: 0,
  solde: 0,
  loading: false,
  error: null,
};

// Thunk pour ajouter un paiement (POST)
export const ajouterPaiement = createAsyncThunk<
  // retour du thunk = réponse API (les paiements + solde recalculé)
  { paiements: Paiement[]; totalPaid: number; solde: number },
  // argument du thunk
  { lotId: string; montant: number; date: string },
  { rejectValue: string }
>('paiement/ajouterPaiement', async ({ lotId, montant, date }, thunkAPI) => {
  try {
    const res = await fetch('/api/paiements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lotId, montant, date }),
    });
    if (!res.ok) {
      const data = await res.json();
      return thunkAPI.rejectWithValue(data.error || 'Erreur serveur');
    }
    return await res.json();
  } catch {
    return thunkAPI.rejectWithValue('Erreur réseau');
  }
});

const paiementSlice = createSlice({
  name: 'paiement',
  initialState,
  reducers: {
    resetPaiementState(state) {
      state.paiements = [];
      state.totalPaid = 0;
      state.solde = 0;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ajouterPaiement.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ajouterPaiement.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.paiements = action.payload.paiements;
        state.totalPaid = action.payload.totalPaid;
        state.solde = action.payload.solde;
      })
      .addCase(ajouterPaiement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Erreur inconnue';
      });
  },
});

export const { resetPaiementState } = paiementSlice.actions;
export default paiementSlice.reducer;
