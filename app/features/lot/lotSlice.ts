import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  LotFromApi,
  VetementFromApi,
} from '../../../type/api/lotTypes';
import {
  CreateLotInput,
  UpdateLotInput,
  CreateVetementInput,
} from '../../../type/input/lotTypes.ts';
import { Client } from '../../../type/type';
import { TypeVetement } from '../../../type/type';

// === Types pour le state Redux ===

export interface LotState {
  lots: LotFromApi[];
  selectedLot: LotFromApi | null;
  vetementsLocal: CreateVetementInput[];
  clientLabels: string[];
  clients: Client[];
  typesVetement: TypeVetement[];
  searchClientQuery: string;
  filteredClients: Client[];
  loading: boolean;
  error: string | null;
}

const initialState: LotState = {
  lots: [],
  selectedLot: null,
  vetementsLocal: [],
  clientLabels: [],
  clients: [],
  typesVetement: [],
  searchClientQuery: '',
  filteredClients: [],
  loading: false,
  error: null,
};

// === Thunks ===

// 🔁 Charger tous les lots
export const fetchLots = createAsyncThunk<LotFromApi[]>('lots/fetchLots', async () => {
  const res = await fetch('/api/lot');
  if (!res.ok) throw new Error('Erreur lors du chargement des lots');
  return await res.json();
});

// 📥 Créer un nouveau lot
export const createLot = createAsyncThunk<
  LotFromApi,
  CreateLotInput,
  { rejectValue: string }
>('lots/createLot', async (data, { rejectWithValue }) => {
  const res = await fetch('/api/lot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const lot = await res.json();
  if (!res.ok) {
    const errorData = await res.json();
    return rejectWithValue(errorData.error || 'Erreur lors de la création');
  }

  // return await res.json();
  return await lot;
});

// 🔄 Mettre à jour un lot existant
export const updateLot = createAsyncThunk<
  LotFromApi,
  UpdateLotInput,
  { rejectValue: string }
>('lots/updateLot', async (data, { rejectWithValue }) => {
  const res = await fetch('/api/lot/${id}', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    return rejectWithValue(errorData.error || 'Erreur lors de la mise à jour');
  }

  return await res.json();
});

// ❌ Supprimer un lot

export const deleteLot = createAsyncThunk<
  string, // Ce que tu retournes
  string, // Ce que tu passes (id)
  { rejectValue: string }
>(
  'lots/deleteLot',
  async (idLot, { rejectWithValue }) => {
    try {
      const res = await fetch(`/api/lot/${idLot}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.error || 'Erreur lors de la suppression');
      }

      return idLot;
    } catch (err) {
      return rejectWithValue('Erreur réseau');
    }
  }
);

// export const deleteLot = createAsyncThunk<string, string, { rejectValue: string }>(
//   'lots/deleteLot',
//   async (idLot, { rejectWithValue }) => {
//     const res = await fetch(`/api/lot/${idLot}`, {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id: idLot }),
//     });

//     if (!res.ok) {
//       const errorData = await res.json();
//       return rejectWithValue(errorData.error || 'Erreur lors de la suppression');
//     }

//     return idLot;
//   }
// );

// 📬 Récupérer un lot par ID

export const getLotById = createAsyncThunk<LotFromApi, string, { rejectValue: string }>(
  'lots/getLotById',
  async (idLot, { rejectWithValue }) => {
    const res = await fetch(`/api/lot?id=${idLot}`);
    if (!res.ok) {
      const errorData = await res.json();
      return rejectWithValue(errorData.error || 'Erreur lors de la récupération');
    }
    return await res.json();
  }
);


// 🧾 Charger les clients pour l'autocomplete
export const fetchClientsForAutocomplete = createAsyncThunk<Client[], void, { rejectValue: string }>(
  'lots/fetchClientsForAutocomplete',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('/api/clients/autocomplete');
      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.error || 'Erreur lors du chargement des clients');
      }
      return await res.json();
    } catch (err) {
      return rejectWithValue('Erreur réseau');
    }
  }
);

// 👕 Charger les types de vêtements
export const fetchTypesVetement = createAsyncThunk<TypeVetement[], void, { rejectValue: string }>(
  'lots/fetchTypesVetement',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('/api/typevetement');
      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.error || 'Erreur lors du chargement des types');
      }
      return await res.json();
    } catch (err) {
      return rejectWithValue('Erreur réseau');
    }
  }
);

// ➕ Ajouter un vêtement local dans le modal
export const addVetementLocal = createAsyncThunk<
  void,
  CreateVetementInput,
  { dispatch: any; getState: any }
>('lots/addVetementLocal', async (vetement, { dispatch, getState }) => {
  const state = getState() as { lots: LotState };
  const updatedList = [...state.lots.vetementsLocal, vetement];
  dispatch(setVetementsLocal(updatedList));
});

// ❌ Supprimer un vêtement local
export const removeVetementLocal = createAsyncThunk<
  void,
  number,
  { dispatch: any; getState: any }
>('lots/removeVetementLocal', async (index, { dispatch, getState }) => {
  const state = getState() as { lots: LotState };
  const updatedList = state.lots.vetementsLocal.filter((_, i) => i !== index);
  dispatch(setVetementsLocal(updatedList));
});

// 🔁 Réinitialiser le formulaire local
export const resetFormLocal = createAsyncThunk<
  void,
  void,
  { dispatch: any }
>('lots/resetFormLocal', async (_, { dispatch }) => {
  dispatch(setVetementsLocal([]));
  dispatch(setSelectedLot(null));
});

// 📋 Charger les clients correspondants à une recherche
export const searchClients = createAsyncThunk<
  void,
  string,
  { dispatch: any; getState: any }
>('lots/searchClients', async (query, { dispatch, getState }) => {
  const state = getState() as { lots: LotState };
  const filtered = state.lots.clients.filter((c) =>
    c.nom.toLowerCase().includes(query.toLowerCase())
  );
  dispatch(setFilteredClients(filtered));
  dispatch(setSearchClientQuery(query));
});

// === Slice ===

const lotSlice = createSlice({
  name: 'lots',
  initialState,
  reducers: {
    setVetementsLocal: (state, action: PayloadAction<CreateVetementInput[]>) => {
      state.vetementsLocal = action.payload;
    },
    setSelectedLot: (state, action: PayloadAction<LotFromApi | null>) => {
      state.selectedLot = action.payload;
    },
    setSearchClientQuery: (state, action: PayloadAction<string>) => {
      state.searchClientQuery = action.payload;
    },
    setFilteredClients: (state, action: PayloadAction<Client[]>) => {
      state.filteredClients = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    // FETCHLOTS
    builder.addCase(fetchLots.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLots.fulfilled, (state, action) => {
      state.loading = false;
      state.lots = action.payload;
    });
    builder.addCase(fetchLots.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // FETCHCLIENTS
    builder.addCase(fetchClientsForAutocomplete.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchClientsForAutocomplete.fulfilled, (state, action) => {
      state.loading = false;
      state.clients = action.payload;
      state.clientLabels = action.payload.map((c: Client) => c.nom);
      state.filteredClients = action.payload;
    });
    builder.addCase(fetchClientsForAutocomplete.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // FETCHTYPESVETEMENT
    builder.addCase(fetchTypesVetement.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTypesVetement.fulfilled, (state, action) => {
      state.loading = false;
      state.typesVetement = action.payload;
    });
    builder.addCase(fetchTypesVetement.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // CREATELOT
    builder.addCase(createLot.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createLot.fulfilled, (state, action) => {
      state.loading = false;
      state.lots.push(action.payload);
      state.vetementsLocal = [];
      state.searchClientQuery = '';
    });
    builder.addCase(createLot.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // GETLOTPERID
    const lotSlice = createSlice({
  name: 'lots',
  initialState,
  reducers: {
    setSelectedLot: (state, action: PayloadAction<LotFromApi | null>) => {
      state.selectedLot = action.payload;
    },
    setVetementsLocal: (state, action: PayloadAction<any[]>) => {
      state.vetementsLocal = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getLotById.pending, (state) => {
      state.loading = true;
      state.selectedLot = null;
      state.error = null;
    });

    builder.addCase(getLotById.fulfilled, (state, action) => {
      console.log("Payload reçu :", action.payload);
      state.loading = false;
      state.selectedLot = action.payload;

      if (Array.isArray(action.payload.vetements)) {
        state.vetementsLocal = action.payload.vetements.map((v: VetementFromApi) => ({
          typeLabel: v.type.nom,
          description: v.description,
          statut: v.statut,
          prixOverride: v.type.prix,
        }));
      } else {
        state.vetementsLocal = [];
      }
    });

    builder.addCase(getLotById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.selectedLot = null;
    });
  },
});
    

    // UPDATELOT
    builder.addCase(updateLot.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateLot.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.lots.findIndex((l) => l.idLot === action.payload.idLot);
      if (index !== -1) {
        state.lots[index] = action.payload;
      } else {
        state.lots.push(action.payload);
      }
      state.vetementsLocal = [];
    });
    builder.addCase(updateLot.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // DELETELOT
    builder.addCase(deleteLot.fulfilled, (state, action) => {
      state.lots = state.lots.filter((l) => l.idLot !== action.payload);
    });
  },
});

export default lotSlice.reducer;

// Export des actions
export const {
  setVetementsLocal,
  setSelectedLot,
  setSearchClientQuery,
  setFilteredClients,
  resetError,
} = lotSlice.actions;
