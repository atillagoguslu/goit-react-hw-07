import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./constactsOps";

// Redux Slice:
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [], // Empty array of contacts
    isLoading: false,
    error: null,
  },

  // Extra Reducers:
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(removeContact.fulfilled, (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
      state.isLoading = false;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(removeContact.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(fetchContacts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addContact.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeContact.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export default contactsSlice.reducer;
