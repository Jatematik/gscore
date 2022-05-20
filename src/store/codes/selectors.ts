import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectCodes = createSelector(
  (state: RootState) => state.codes,
  (codes) => codes.codes
);

export const codesSelectors = {
  selectCodes,
};
