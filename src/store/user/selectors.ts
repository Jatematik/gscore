import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectUser = createSelector(
  (state: RootState) => state.user,
  (user) => user.user
);

const selectToken = createSelector(
  (state: RootState) => state.user,
  (user) => user.token
);

const selectLoading = createSelector(
  (state: RootState) => state.user,
  (user) => user.loading
);

const selectError = createSelector(
  (state: RootState) => state.user,
  (user) => user.error
);

export const userSelectors = {
  selectUser,
  selectToken,
  selectLoading,
  selectError,
};
