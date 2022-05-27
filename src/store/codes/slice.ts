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
    resetCodes() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        codesThunks.asyncActivateCode.fulfilled,
        (state, action: PayloadAction<SubscribeCodeProps>) => {
          state.codes.forEach((item) => {
            if (item.id === action.payload.id) {
              item.status = action.payload.status;
              item.code = action.payload.code;
              item.origin = action.payload.origin;
            }
          });
        }
      )
      .addCase(
        codesThunks.asyncManageSelfCodes.fulfilled,
        (state, action: PayloadAction<SubscribeCodeProps[]>) => {
          state.codes = action.payload;
        }
      )
      .addCase(
        codesThunks.asyncManageSelfCodes.rejected,
        (state, action: PayloadAction<any | unknown>) => {}
      );
  },
});

export const { setCodes, resetCodes } = codesSlice.actions;

export default codesSlice.reducer;
