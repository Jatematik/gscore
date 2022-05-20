import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { loadState } from "./browser-storage";

import { reducers } from "./ducks";

const reducer = combineReducers({
  user: reducers.user,
  cart: reducers.cart,
  codes: reducers.codes,
});

export const store = configureStore({
  reducer,
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type StoreType = typeof store;
