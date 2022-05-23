import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectSubscribes = createSelector(
  (state: RootState) => state.subscribes,
  (subscribes) => subscribes.subscribes
);

const selectLoading = createSelector(
  (state: RootState) => state.subscribes,
  (subscribes) => subscribes.loading
);

const selectError = createSelector(
  (state: RootState) => state.subscribes,
  (subscribes) => subscribes.error
);

export const subscribesSelectors = {
  selectSubscribes,
  selectLoading,
  selectError,
};
