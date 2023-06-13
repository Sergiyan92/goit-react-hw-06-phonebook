import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      prepare: contact => ({ payload: { ...contact, id: nanoid() } }),
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },

    filteredContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
export const { addContact, deleteContact, filteredContacts } =
  contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
