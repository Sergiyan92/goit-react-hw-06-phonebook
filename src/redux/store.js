import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
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
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
