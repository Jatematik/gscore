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
    resetError(state) {
      state.error = "";
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
          state.loading = "fullfiled";
        }
      )
      .addCase(
        userThunks.signIn.rejected,
        (state, action: PayloadAction<any | unknown>) => {
          state.loading = "rejected";
          state.error = action.payload;
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
          state.loading = "fullfiled";
        }
      )
      .addCase(userThunks.signUp.rejected, (state) => {
        state.loading = "rejected";
      });
  },
});

export const { logOut, resetError } = userSlice.actions;
export default userSlice.reducer;
