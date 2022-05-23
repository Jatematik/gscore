import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubscribeCodeProps, SubscribeProps } from "src/types";
import { subscribesThunks } from "./thunk";
import { ActivateCodeProps, SubscribesState } from "./types";

const initialState: SubscribesState = {
  subscribes: [],
};

const subscribesSlice = createSlice({
  initialState,
  name: "codes",
  reducers: {
    setCodes(state, action: PayloadAction<SubscribeCodeProps[]>) {},
    activateCode(state, action: PayloadAction<ActivateCodeProps>) {},
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

export const { setCodes, activateCode } = subscribesSlice.actions;

export default subscribesSlice.reducer;
