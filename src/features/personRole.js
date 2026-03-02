import { createSlice } from "@reduxjs/toolkit";
import { set } from "react-hook-form";
import { useLocation } from "react-router-dom";

export const personRole = createSlice({
  name: "role",
  initialState: {
    value: "",
    id: null,
    userType: "",
    user: {},
    admin: {},
  },
  reducers: {
    setPersonRole: (state, action) => {
      state.value = action.payload;
    },

    setId: (state, action) => {
      state.id = action.payload;
    },

    setUserType: (state, action) => {
      state.userType = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPersonRole, setId, setUserType,setUser ,setAdmin} = personRole.actions;

export default personRole.reducer;
