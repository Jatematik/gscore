import userReducer from "./user/slice";
import cartReducer from "./cart/slice";
import codesReducer from "./codes/slice";

import { userActions } from "./user/actions";
import { cartActions } from "./cart/actions";
import { codesActions } from "./codes/actions";

import { userSelectors } from "./user/selectors";
import { cartSelectors } from "./cart/selectors";
import { codesSelectors } from "./codes/selectors";

import { userThunks } from "./user/thunks";

export const reducers = {
  user: userReducer,
  cart: cartReducer,
  codes: codesReducer,
};

export const actions = {
  user: userActions,
  cart: cartActions,
  codes: codesActions,
};

export const selectors = {
  user: userSelectors,
  cart: cartSelectors,
  codes: codesSelectors,
};

export const thunks = {
  user: userThunks,
};
