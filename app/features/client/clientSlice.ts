import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Types
interface User {
  idUser: string;
  nom: string;
  email: string;
  telephone?: string;
  role: string;
}

export interface Client {
  idClient: string;
  nom: string;
  telephone?: string | null;
  nbreLots: number;
  montantTotal: number;
  user: User; // Relation avec l'utilisateur
  lots?: any[]; 
}

interface ClientState {
  clients: Client[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// === Thunks ===

export const fetchClients = createAsyncThunk(
  'clients/fetchClients',
  async () => {
    const response = await axios.get('/api/clients');
    return response.data;
  }
);

export const fetchClientById = createAsyncThunk(
  'clients/fetchClientById',
  async (id: string) => {
    const response = await axios.get(`/api/clients/${id}`);
    return response.data;
  }
);

export const createClient = createAsyncThunk(
  'clients/createClient',
  async (clientData: Partial<Client>) => {
    const response = await axios.post('/api/clients', clientData);
    return response.data;
  }
);

export const updateClient = createAsyncThunk(
  'clients/updateClient',
  async ({ id, data }: { id: string; data: Partial<Client> }) => {
    const response = await axios.put(`/api/clients/${id}`, data);
    return response.data;
  }
);

export const deleteClient = createAsyncThunk(
  'clients/deleteClient',
  async (id: string) => {
    await axios.delete(`/api/clients/${id}`);
    return id;
  }
);

// === Slice ===

const initialState: ClientState = {
  clients: [],
  status: 'idle',
  error: null,
};

const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // --- fetchClients ---
      .addCase(fetchClients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.clients = action.payload;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Erreur lors du chargement';
      })

      // --- fetchClientById ---
      .addCase(fetchClientById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClientById.fulfilled, (state, action) => {
        state.status = 'succeeded';

        const newClient = action.payload;

        const index = state.clients.findIndex(
          (client) => client.idClient === newClient.idClient
        );

        if (index >= 0) {
          // Mettre à jour si le client existe déjà
          state.clients[index] = newClient;
        } else {
          // Sinon, ajouter au tableau
          state.clients.push(newClient);
        }
      })
      .addCase(fetchClientById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Erreur lors du chargement du client';
      })

      // === createClient ===
      .addCase(createClient.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createClient.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.clients.push(action.payload); // Ajout du nouveau client
      })
      .addCase(createClient.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Erreur lors de la création du client';
      })

      // === updateClient ===
      .addCase(updateClient.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        state.status = 'succeeded';

        const updatedClient = action.payload;
        const index = state.clients.findIndex(
          (client) => client.idClient === updatedClient.idClient
        );

        if (index !== -1) {
          // Remplacer l’ancien client par la version mise à jour
          state.clients[index] = updatedClient;
        }
      })
      .addCase(updateClient.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Erreur lors de la mise à jour du client';
      })

      // === deleteClient ===
      .addCase(deleteClient.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteClient.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.clients = state.clients.filter(
          (client) => client.idClient !== action.payload
        );
      })
      .addCase(deleteClient.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Erreur lors de la suppression du client';
      });
  },
});

export default clientSlice.reducer;

