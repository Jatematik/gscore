import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiRequests } from "src/services/apiFunctions";
import { SubscribeProps } from "src/types";

const asyncGetSubscribes = createAsyncThunk<SubscribeProps[], {}>(
  "subscribe/self",
  async ({}, { rejectWithValue }) => {
    try {
      const response = await apiRequests.products.getSubscribes();

      return response.data;
    } catch (e: unknown | any) {
      return rejectWithValue(e.message);
    }
  }
);

export const subscribesThunks = {
  asyncGetSubscribes,
};
