import userReducer from "./user/slice";
import cartReducer from "./cart/slice";
import subscribesReducer from "./subscribes/slice";
import codesReductor from "./codes/slice";

import { userActions } from "./user/actions";
import { cartActions } from "./cart/actions";
import { subscribesActions } from "./subscribes/actions";
import { codesActions } from "./codes/actions";

import { userSelectors } from "./user/selectors";
import { cartSelectors } from "./cart/selectors";
import { subscribesSelectors } from "./subscribes/selectors";
import { codesSelectors } from "./codes/selectors";

import { userThunks } from "./user/thunks";
import { subscribesThunks } from "./subscribes/thunks";
import { codesThunks } from "./codes/thunks";

export const reducers = {
  user: userReducer,
  cart: cartReducer,
  subscribes: subscribesReducer,
  codes: codesReductor,
};

export const actions = {
  user: userActions,
  cart: cartActions,
  subscribes: subscribesActions,
  codes: codesActions,
};

export const selectors = {
  user: userSelectors,
  cart: cartSelectors,
  subscribes: subscribesSelectors,
  codes: codesSelectors,
};

export const thunks = {
  user: userThunks,
  subscribes: subscribesThunks,
  codes: codesThunks,
};
