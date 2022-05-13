import userReducer from "./user/slice";

import { userActions } from "./user/actions";

import { userSelectors } from "./user/selectors";

import { userThunks } from "./user/thunks";

export const reducers = {
  user: userReducer,
};

export const actions = {
  user: userActions,
};

export const selectors = {
  user: userSelectors,
};

export const thunks = {
  user: userThunks,
};
