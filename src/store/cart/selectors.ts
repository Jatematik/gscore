import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectProducts = createSelector(
  (state: RootState) => state.cart,
  (cart) => cart.products
);

export const cartSelectors = {
  selectProducts,
};
