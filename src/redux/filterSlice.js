import { createSlice } from '@reduxjs/toolkit';

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(_, { payload }) {
      return payload;
    },
  },
});

const contactsFilterReducer = contactsFilterSlice.reducer;
const contactsFilterActions = contactsFilterSlice.actions;
export const { filterContacts } = contactsFilterActions;

// const contactsFilterReducer = combineReducers({
//   //   [contactsListSlice.name]: contactsListSlice.reducer,
//   [contactsFilterSlice.name]: contactsFilterSlice.reducer,
// });
export default contactsFilterReducer;
