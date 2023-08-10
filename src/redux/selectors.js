export const selectLoading = state => state.authorization.isLoading;

export const selectError = state => state.authorization.error;

export const selectToken = state => state.authorization.token;

export const selectUserData = state => state.authorization.userData;

export const selectAuthentificated = state =>
  state.authorization.authentificated;
