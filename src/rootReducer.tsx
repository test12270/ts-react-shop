import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { cartSlice } from "./store/store";
import productSlice from "./store/store";

export const rootReducer = combineReducers({
  productSlice: productSlice.reducer,
  cartSlice: cartSlice.reducer,
});
