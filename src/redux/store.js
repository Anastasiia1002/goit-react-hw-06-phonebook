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
  //   whitelist: [contacts],
  //   blacklist: ['filter'],
  storage,
};
// const persistFilter = {
//   key: 'filter',
//   version: 1,
//   //   whitelist: [contacts],
//   //   blacklist: ['filter'],
//   storage,
// };

// const myReducer = createReducer(0, {
//   contacts: {
//     name: '',
//     number: '',
//   },
// });

const persistContactsListReducer = persistReducer(
  persistContactsList,
  ontactsListReducer
);
// const persistContactsFilterReducer = persistReducer(
//   persistFilter,
//   contactsFilterReducer
// );

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
