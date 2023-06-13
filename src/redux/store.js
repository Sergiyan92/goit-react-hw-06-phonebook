import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whiteList: ['contacts'],
};
const persistedContactsReducer = persistReducer(persistConfig, contactReducer);
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
