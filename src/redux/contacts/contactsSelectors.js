import { createSelector } from '@reduxjs/toolkit';

export const selectUserContacts = state => state.contacts.contacts;

export const selectContactsIsLoading = state => state.contacts.isLoading;

export const selectContactsError = state => state.contacts.error;

export const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectUserContacts, selectFilter],
  (contacts, filter) => {
    if (contacts) {
      return contacts.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase());
      });
    }
    return contacts;
  }
);
