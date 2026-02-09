import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
  },
  reducers: {
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { setQuantity } = cart.actions;
export default cart.reducer;
