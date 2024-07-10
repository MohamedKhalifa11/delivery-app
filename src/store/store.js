import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartDrawerSlice from "./shopping-cart/cartDrawerSlice";

// Create the Redux store with the cart and cart UI slices
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer, // Reducer for managing cart state
    cartDrawer: cartDrawerSlice.reducer, // Reducer for managing cart drawer state
  },
});

export default store;
