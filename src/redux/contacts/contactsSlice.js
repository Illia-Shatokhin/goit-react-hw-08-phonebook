import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  requestContactsThunk,
} from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  contacts: null,
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(requestContactsThunk.pending, handlePending)
      .addCase(requestContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(requestContactsThunk.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.contacts.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(deleteContactThunk.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
