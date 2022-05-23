import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { userThunks } from "./thunks";

const initialState: UserState = {
  token: "",
  user: {
    id: 0,
    email: "",
    username: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userThunks.signIn.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        userThunks.signIn.fulfilled,
        (state, action: PayloadAction<UserState>) => {
          state.token = action.payload.token;
          state.user = action.payload.user;
          state.error = "";
          state.loading = "fulfilled";
        }
      )
      .addCase(
        userThunks.signIn.rejected,
        (state, action: PayloadAction<any | unknown>) => {
          state.error = action.payload;
          state.loading = "rejected";
        }
      )
      .addCase(userThunks.signUp.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        userThunks.signUp.fulfilled,
        (
          state,
          action: PayloadAction<{
            email: string;
            username: string;
            token: string;
          }>
        ) => {
          state.token = action.payload.token;
          state.user.email = action.payload.email;
          state.user.username = action.payload.username;
          state.loading = "fulfilled";
        }
      )
      .addCase(
        userThunks.signUp.rejected,
        (state, action: PayloadAction<any | unknown>) => {
          state.error = action.payload;
          state.loading = "rejected";
        }
      )
      .addCase(userThunks.updatePersonalData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        userThunks.updatePersonalData.fulfilled,
        (state, action: PayloadAction<{ email: string; username: string }>) => {
          state.user.email = action.payload.email;
          state.user.username = action.payload.username;
          state.loading = "fulfilled";
        }
      )
      .addCase(
        userThunks.updatePersonalData.rejected,
        (state, action: PayloadAction<any | unknown>) => {
          state.error = action.payload;
          state.loading = "rejected";
        }
      );
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
