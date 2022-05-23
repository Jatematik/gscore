import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectCodes = createSelector(
  (state: RootState) => state.codes,
  (codes) => codes.codes
);

const selectId = createSelector(
  (state: RootState) => state.codes,
  (codes) => codes.subscribeCardId
);

const selectError = createSelector(
  (state: RootState) => state.codes,
  (codes) => codes.error
);

export const codesSelectors = {
  selectCodes,
  selectId,
  selectError,
};
