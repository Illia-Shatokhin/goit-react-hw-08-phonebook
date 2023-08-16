export const selectUserContacts = state => state.contacts.contacts;

export const selectContactsIsLoading = state => state.contacts.isLoading;

export const selectContactsError = state => state.contacts.error;

export const selectFilter = state => state.contacts.filter;
