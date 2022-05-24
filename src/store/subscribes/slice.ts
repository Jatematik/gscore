import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubscribeCodeProps, SubscribeProps } from "src/types";
import { subscribesThunks } from "./thunks";
import { SubscribesState } from "./types";

const initialState: SubscribesState = {
  subscribes: [],
};

const subscribesSlice = createSlice({
  initialState,
  name: "codes",
  reducers: {
    updateCode(
      state,
      action: PayloadAction<{ id: number; code: SubscribeCodeProps }>
    ) {
      state.subscribes.forEach((subscribe) => {
        if (subscribe.id === action.payload.id) {
          subscribe.codes.forEach((code) => {
            if (code.id === action.payload.code.id) {
              code.code = action.payload.code.code;
              code.id = action.payload.code.id;
              code.origin = action.payload.code.origin;
              code.status = action.payload.code.status;
              code.subscribeId = action.payload.code.subscribeId;
              code.userId = action.payload.code.userId;
            }
          });
        }
      });
    },
    setCodes(
      state,
      action: PayloadAction<{ id: number; codes: SubscribeCodeProps[] }>
    ) {
      state.subscribes.forEach((subscribe) => {
        if (subscribe.id === action.payload.id) {
          subscribe.codes = action.payload.codes;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribesThunks.asyncGetSubscribes.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        subscribesThunks.asyncGetSubscribes.fulfilled,
        (state, action: PayloadAction<SubscribeProps[]>) => {
          state.subscribes = action.payload;
          state.loading = "fulfilled";
        }
      )
      .addCase(subscribesThunks.asyncGetSubscribes.rejected, (state) => {
        state.loading = "rejected";
      });
  },
});

export const { updateCode, setCodes } = subscribesSlice.actions;

export default subscribesSlice.reducer;
