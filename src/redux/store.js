import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import ontactsListReducer from './contactsSlice';
import contactsFilterReducer from './filterSlice';

const persistContactsList = {
  key: 'contactsList',
  version: 1,
  storage,
};

const persistContactsListReducer = persistReducer(
  persistContactsList,
  ontactsListReducer
);

export const store = configureStore({
  reducer: {
    contactsList: persistContactsListReducer,
    filter: contactsFilterReducer,
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
