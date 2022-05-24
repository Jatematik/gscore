import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequests } from "src/services/apiFunctions";
import { SubscribeCodeProps } from "src/types";
import { AppDispatch } from "../store";

const asyncActivateCode = createAsyncThunk<
  SubscribeCodeProps,
  { code: string }
>("code/activate", async (data: { code: string }) => {
  try {
    const response = await apiRequests.codes.activateCode(data);

    return response.data;
  } catch (e) {}
});

const asyncManageSelfCodes = createAsyncThunk<
  SubscribeCodeProps[],
  { codesIds: number[]; subscribeId: number }
>("code/manage", async (data: { codesIds: number[]; subscribeId: number }) => {
  try {
    const response = await apiRequests.codes.manageSelfCodes(data);

    return response.data;
  } catch (e) {}
});

export const codesThunks = {
  asyncActivateCode,
  asyncManageSelfCodes,
};
