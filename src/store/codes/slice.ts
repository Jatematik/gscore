import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SubscribeCodeProps } from "src/types";
import { codesThunks } from "./thunks";
import { CodesState } from "./types";

const initialState: CodesState = {
  subscribeCardId: 0,
  codes: [],
};

const codesSlice = createSlice({
  initialState,
  name: "codes",
  reducers: {
    setCodes(
      state,
      action: PayloadAction<{
        codes: SubscribeCodeProps[];
        id: number;
      }>
    ) {
      state.codes = action.payload.codes;
      state.subscribeCardId = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      codesThunks.asyncActivateCode.fulfilled,
      (state, action) => {
        state.codes.forEach((item) => {
          if (item.id === action.payload.id) {
            item.status = action.payload.status;
            item.code = action.payload.code;
            item.origin = action.payload.origin;
          }
        });
      }
    );
  },
});

export const { setCodes } = codesSlice.actions;

export default codesSlice.reducer;
