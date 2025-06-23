import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1. Interface pour une dépense
interface Depenses {
  idDepenses: string;
  beneficiaire: string;
  ordonanceur: string;
  raison: string;
  montant: number;
  createdAt: string;
}

// 2. Interface pour l'état du slice
interface DepensesState {
  list: Depenses[];
   loading: boolean;
  error: string | null;
}

// 3. État initial typé
const initialState: DepensesState = {
  list: [],
  loading: false,
  error: null,
};

// 4. Thunks avec typage
export const fetchDepenses = createAsyncThunk<Depenses[]>(
  "depenses/fetchAll",
  async () => {
    const res = await fetch("/api/depenses");
    return (await res.json()) as Depenses[];
  }
);

export const createDepenses = createAsyncThunk<
  Depenses,
  Omit<Depenses, "idDepenses"> // On exclut l'ID car généré côté serveur
>(
  "depenses/create",
  async (depensesData) => {
    const res = await fetch("/api/depenses", {
      method: "POST",
      body: JSON.stringify(depensesData),
      headers: { "Content-Type": "application/json" }
    });
    return (await res.json()) as Depenses;
  }
);

export const updateDepenses = createAsyncThunk<
  Depenses,
  { id: string; data: Partial<Depenses> } // Partial permet des updates partielles
>(
  "depenses/update",
  async ({ id, data }) => {
    const res = await fetch(`/api/depenses/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    return (await res.json()) as Depenses;
  }
);

export const deleteDepenses = createAsyncThunk<string, string>(
  "depenses/delete",
  async (id) => {
    await fetch(`/api/depenses/${id}`, { method: "DELETE" });
    return id;
  }
);

const depensesSlice = createSlice({
  name: "depenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepenses.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchDepenses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDepenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Erreur de chargement";
      })
      .addCase(createDepenses.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(updateDepenses.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (d) => d.idDepenses === action.payload.idDepenses
        );
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(deleteDepenses.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (d) => d.idDepenses !== action.payload
        );
      });
  },
});

export default depensesSlice.reducer;