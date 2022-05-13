import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducers } from "./ducks";

const reducer = combineReducers({
  user: reducers.user,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type StoreType = typeof store;
