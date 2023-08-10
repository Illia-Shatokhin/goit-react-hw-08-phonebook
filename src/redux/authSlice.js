const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isLoading: false,
  error: null,
  userData: null,
  token: null,
  authentificated: false,
};

const authentificatedSlice = createSlice({
  name: 'authorization',
  initialState,
  extraReducers: builder => builder.addCase(bla, state => state),
});

export const authorizationReducer = authentificatedSlice.reducer;
