export const selectUserLoading = state => state.auth.isLoading;

export const selectUserError = state => state.auth.error;

export const selectToken = state => state.auth.token;

export const selectUserData = state => state.auth.userData;

export const selectAuthentificated = state => state.auth.authentificated;
