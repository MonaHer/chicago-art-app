import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/artworks/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
});