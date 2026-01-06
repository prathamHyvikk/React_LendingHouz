import { createSlice } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

export const personRole = createSlice({
  name: "role",
  initialState: {
    value: "app",
    id: null,
  },
  reducers: {
    setPersonRole: (state, action) => {
      state.value = action.payload;
    },

    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPersonRole, setId } = personRole.actions;

export default personRole.reducer;
