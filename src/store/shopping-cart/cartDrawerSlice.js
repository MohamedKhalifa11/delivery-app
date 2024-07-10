import { createSlice } from "@reduxjs/toolkit";

// Create a slice for cart drawer
const cartDrawerSlice = createSlice({
  name: "cartDrawer",
  initialState: { cartIsVisible: false },

  reducers: {
    // When the cart drawer is visible, hide it and vice versa
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartDrawerActions = cartDrawerSlice.actions;
export default cartDrawerSlice;
