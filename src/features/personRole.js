import { createSlice } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

export const personRole = createSlice({
  name: "role",
  initialState: {
    value: "app",
  },
  reducers: {
      setPersonRole: (state, action) => {
          
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPersonRole } = personRole.actions;

export default personRole.reducer;
