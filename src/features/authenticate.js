import { createSlice } from "@reduxjs/toolkit";

export const authenticate = createSlice({
  name: "authenticate",
  initialState: {
    value: false,
    expiry: null, 
  },
  reducers: {
    setAuthenticate: (state, action) => {
      state.value = action.payload.value;
      state.expiry = action.payload.expiry;
    },
    logout: (state) => {
      state.value = false;
      state.expiry = null;
    },
  },
});

export const { setAuthenticate, logout } = authenticate.actions;
export default authenticate.reducer;
