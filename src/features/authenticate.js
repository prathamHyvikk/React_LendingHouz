import { createSlice } from "@reduxjs/toolkit";

export const authenticate = createSlice({
  name: "authenticate",
  initialState: {
    value: false,
    expiry: null,
    token: "",
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

    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setAuthenticate, logout , setToken } = authenticate.actions;
export default authenticate.reducer;
