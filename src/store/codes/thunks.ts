import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequests } from "src/services/apiFunctions";
import { AppDispatch } from "../store";
import { ActivateCodeProps } from "../subscribes/types";

const asyncActivateCode = createAsyncThunk<
  ActivateCodeProps,
  { code: string },
  { dispatch: AppDispatch }
>("code/activate", async (data: { code: string }) => {
  try {
    const response = await apiRequests.codes.activateCode(data);

    return response.data;
  } catch (e) {}
});

export const codesThunks = {
  asyncActivateCode,
};
