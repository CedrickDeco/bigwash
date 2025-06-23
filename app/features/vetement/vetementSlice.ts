// features/vetement/vetementSlice.ts
import { Vetement } from "../../../type/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export interface VetementState {
  vetements: Vetement[];
  loading: boolean;
  error: string | null;
}

const initialState: VetementState = {
  vetements: [],
  loading: false,
  error: null,
};

export const fetchVetementsByLotId = createAsyncThunk(
  "vetements/fetchByLotId",
  async (idLot: string, thunkAPI) => {
    try {
      // const response = await axios.get(`/api/vetement/?lotId=${idLot}`);
      const response = await axios.get(`/api/vetement/${idLot}`);
      console.log("Contenu de response===> :", response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Erreur lors du chargement des vêtements");
    }
  }
);

export const updateVetementStatut = createAsyncThunk<
  { idVetement: string; statut: string }, // Type de retour (payload)
  { idVetement: string; statut: string }, // Paramètre passé à l'action
  { rejectValue: string } // En cas d'erreur
>(
  "vetements/updateVetementStatut",
  async ({ idVetement, statut }: { idVetement: string; statut: string }, thunkAPI) => {
    try {
      await axios.patch(`/api/vetement/${idVetement}`, { statut });
      return { idVetement, statut };
    } catch (error) {
      return thunkAPI.rejectWithValue("Échec de mise à jour");
    }
  }
);


const vetementSlice = createSlice({
  name: "vetements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVetementsByLotId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVetementsByLotId.fulfilled, (state, action) => {
        state.loading = false;
        state.vetements = action.payload;
      })
      .addCase(fetchVetementsByLotId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateVetementStatut.fulfilled, (state, action) => {
      if (!action.payload) return;

      const { idVetement, statut } = action.payload;

      const index = state.vetements.findIndex((v) => v.idVetement === idVetement);

      if (index !== -1) {
        state.vetements[index].statut = statut;
      }
    });
  },
});

export default vetementSlice.reducer;
