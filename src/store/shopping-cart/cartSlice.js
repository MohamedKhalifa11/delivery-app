import { createSlice } from "@reduxjs/toolkit";

// totalQuantity: total number of items in the cart, regardless of their type.
// totalAmount: total cost of all items in the cart combined.
// totalPrice: total price of an individual item in the cart

// Load initial state from localStorage if available
const items = JSON.parse(localStorage.getItem("cartItems")) || [];
const totalAmount = JSON.parse(localStorage.getItem("totalAmount")) || 0;
const totalQuantity = JSON.parse(localStorage.getItem("totalQuantity")) || 0;

// Utility function to set cart state in localStorage
const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

// localStorage.removeItem("cartItems");
// localStorage.removeItem("totalAmount");
// localStorage.removeItem("totalQuantity");

// Initial state of the cart
const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

// Create a slice for cart page
const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    /* Add Item to Cart */
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      // If the item doesn't exist in the cart, add it
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        // If the item exists, increment its quantity and total price
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }

      // Recalculate total amount
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Save updated cart state to localStorage
      setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
    },

    /* Remove Item from Cart */
    removeItem(state, action) {
      const id = action.payload; // ID of the item to be removed
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        // If the item's quantity is 1, remove it from the cart
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        // If the item's quantity is more than 1, decrement its quantity and total price
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }

      // Recalculate total amount
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Save updated cart state to localStorage
      setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
    },

    /* Delete the whole item from Cart */
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        // If the item exists, remove it from the cart and update total quantity
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity -= existingItem.quantity;
      }

      // Recalculate total amount
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Save updated cart state to localStorage
      setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
    },

    // Clear the Cart
    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

      // Update localStorage
      setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
