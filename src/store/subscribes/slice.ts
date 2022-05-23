import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubscribeProps } from "src/types";
import { subscribesThunks } from "./thunks";
import { ActivateCodeProps, SubscribesState } from "./types";

const initialState: SubscribesState = {
  subscribes: [],
};

const subscribesSlice = createSlice({
  initialState,
  name: "codes",
  reducers: {
    updateCode(
      state,
      action: PayloadAction<{ id: number; code: ActivateCodeProps }>
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
  },
  extraReducers: (builder) => {
    builder.addCase(
      subscribesThunks.asyncGetSubscribes.fulfilled,
      (state, action: PayloadAction<SubscribeProps[]>) => {
        state.subscribes = action.payload;
      }
    );
  },
});

export const { updateCode } = subscribesSlice.actions;

export default subscribesSlice.reducer;
