import { configureStore } from "@reduxjs/toolkit";
import typeVetementReducer from "../app/features/typeVetement/typeVetementSlice";
import depensesReducer from "../app/features/depenses/depensesSlice";
import clientReducer from "../app/features/client/clientSlice";
import lotReducer from "../app/features/lot/lotSlice";
import vetementReducer from "../app/features/vetement/vetementSlice";
import { 
  useSelector,
  useDispatch,
  TypedUseSelectorHook
} from 'react-redux';

export const store = configureStore({
  reducer: {
    typeVetement: typeVetementReducer,
    depenses: depensesReducer,
    clients: clientReducer,
    lots: lotReducer,
    vetements: vetementReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Type AppSelector pour les sélecteurs
export type AppSelector<ReturnType = unknown> = (state: RootState) => ReturnType;

// Hooks Redux typés
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
