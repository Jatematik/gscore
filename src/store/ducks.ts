import userReducer from "./user/slice";
import cartReducer from "./cart/slice";

import { userActions } from "./user/actions";
import { cartActions } from "./cart/actions";

import { userSelectors } from "./user/selectors";
import { cartSelectors } from "./cart/selectors";

import { userThunks } from "./user/thunks";

export const reducers = {
  user: userReducer,
  cart: cartReducer,
};

export const actions = {
  user: userActions,
  cart: cartActions,
};

export const selectors = {
  user: userSelectors,
  cart: cartSelectors,
};

export const thunks = {
  user: userThunks,
};
