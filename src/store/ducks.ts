import userReducer from "./user/slice";
import cartReducer from "./cart/slice";
import subscribesReducer from "./subscribes/slice";

import { userActions } from "./user/actions";
import { cartActions } from "./cart/actions";
import { subscribesActions } from "./subscribes/actions";

import { userSelectors } from "./user/selectors";
import { cartSelectors } from "./cart/selectors";
import { subscribesSelectors } from "./subscribes/selectors";

import { userThunks } from "./user/thunks";
import { subscribesThunks } from "./subscribes/thunk";

export const reducers = {
  user: userReducer,
  cart: cartReducer,
  subscribes: subscribesReducer,
};

export const actions = {
  user: userActions,
  cart: cartActions,
  subscribes: subscribesActions,
};

export const selectors = {
  user: userSelectors,
  cart: cartSelectors,
  subscribes: subscribesSelectors,
};

export const thunks = {
  user: userThunks,
  subscribes: subscribesThunks,
};
