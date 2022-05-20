import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { ProductProps } from "src/types";
import { ProductInitialState } from "./types";

const initialState: ProductInitialState = {
  products: [],
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProduct(state, action: PayloadAction<ProductProps>) {
      if (
        !current(state.products).find((item) => item.id === action.payload.id)
      ) {
        state.products.push(action.payload);
      }
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.products.splice(action.payload, 1);
    },
    resetProduct() {
      return initialState;
    },
  },
});

export const { addProduct, deleteProduct, resetProduct } = cartSlice.actions;

export default cartSlice.reducer;
