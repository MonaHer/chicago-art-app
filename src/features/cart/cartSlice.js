import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((artwork) => artwork.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
