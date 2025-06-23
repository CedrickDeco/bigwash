import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface TypeVetement {
  idType: string;
  nom: string;
  prix: number;
  etat: string;
}

interface TypeVetementState {
  items: TypeVetement[];
  loading: boolean;
  error: string | null;
}

const initialState: TypeVetementState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchTypeVetements = createAsyncThunk(
  "typeVetement/fetchAll",
  async () => {
    const response = await axios.get("/api/typevetement");
    return response.data;
  }
);

export const addTypeVetement = createAsyncThunk(
  "typeVetement/add",
  async (data: Omit<TypeVetement, "idType">) => {
    const response = await axios.post("/api/typevetement", data);
    return response.data;
  }
);

export const deleteTypeVetement = createAsyncThunk(
  "typeVetement/delete",
  async (id: string) => {
    await axios.delete(`/api/typevetement/${id}`);
    return id;
  }
);

export const updateTypeVetement = createAsyncThunk(
  "typeVetement/update",
  async ({ id, data }: { id: string; data: any }) => {
    const res = await fetch(`/api/typevetement/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Erreur lors de la mise à jour");
    return await res.json();
  }
);



const typeVetementSlice = createSlice({
  name: "typeVetement",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTypeVetements.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTypeVetements.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTypeVetements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Erreur lors du chargement";
      })
      .addCase(addTypeVetement.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(deleteTypeVetement.fulfilled, (state, action) => {
          state.items = state.items.filter(item => item.idType !== action.payload);
      })
      .addCase(updateTypeVetement.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.idType === action.payload.idType);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });

  },
});

export default typeVetementSlice.reducer;
