import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiRequests } from "src/services/apiFunctions";
import { UserState } from "./types";

const signIn = createAsyncThunk<UserState, { email: string; password: string }>(
  "users/sign-in",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await apiRequests.user.signIn(data);

      return response.data;
    } catch (e: unknown | any) {
      return rejectWithValue(e.message);
    }
  }
);

const signUp = createAsyncThunk<
  { email: string; username: string; token: string },
  { username: string; email: string; password: string }
>(
  "users/sign-up",
  async (
    data: { username: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await apiRequests.user.signUp(data);

      return response.data;
    } catch (e: unknown | any) {
      return rejectWithValue(e.message);
    }
  }
);

export const userThunks = {
  signIn,
  signUp,
};
