import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubscribeCodeProps } from "src/types";
import { CodesState } from "./types";

const initialState: CodesState = {
  codes: [],
};

const codesSlice = createSlice({
  initialState,
  name: "codes",
  reducers: {
    setCodes(state, action: PayloadAction<SubscribeCodeProps[]>) {
      state.codes = action.payload;
    },
  },
});

export const { setCodes } = codesSlice.actions;

export default codesSlice.reducer;
