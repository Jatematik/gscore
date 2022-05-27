import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequests } from "src/services/apiFunctions";
import { SubscribeCodeProps } from "src/types";

const asyncActivateCode = createAsyncThunk<
  SubscribeCodeProps,
  { code: string }
>("code/activate", async (data: { code: string }, { rejectWithValue }) => {
  try {
    const response = await apiRequests.codes.activateCode(data);

    return response.data;
  } catch (e: any | unknown) {
    rejectWithValue(e.message);
  }
});

const asyncManageSelfCodes = createAsyncThunk<
  SubscribeCodeProps[],
  { codesIds: number[]; subscribeId: number }
>(
  "code/manage",
  async (
    data: { codesIds: number[]; subscribeId: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await apiRequests.codes.manageSelfCodes(data);

      return response.data;
    } catch (e: any | unknown) {
      return rejectWithValue(e.message);
    }
  }
);

export const codesThunks = {
  asyncActivateCode,
  asyncManageSelfCodes,
};
