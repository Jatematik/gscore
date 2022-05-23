import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectSubscribes = createSelector(
  (state: RootState) => state.subscribes,
  (subscribes) => subscribes.subscribes
);

export const subscribesSelectors = {
  selectSubscribes,
};
