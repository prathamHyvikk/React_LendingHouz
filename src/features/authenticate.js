import { createSlice } from "@reduxjs/toolkit";

export const authenticate = createSlice({
  name: "authenticate",
  initialState: {
    value: false,
  },
  reducers: {
    setAuthenticate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAuthenticate } = authenticate.actions;
export default authenticate.reducer;
