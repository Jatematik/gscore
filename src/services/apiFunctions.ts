import httpClient from "./apiClient";
import { UserState } from "src/store/user/types";

const user = {
  signIn: (data: { email: string; password: string }) =>
    httpClient.post<UserState>("/api/users/sign-in", data),

  signUp: (data: { username: string; email: string; password: string }) =>
    httpClient.post<{
      email: string;
      username: string;
      token: string;
    }>("/api/users/sign-up", data),

  updatePassword: (data: { currentPassword: string; newPassword: string }) =>
    httpClient.patch("/api/users/update-password", data),

  updatePersonalData: (data: { email: string; username: string }) =>
    httpClient.patch("/api/users", data),
};

export const apiRequests = {
  user,
};
