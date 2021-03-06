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

const products = {
  getProducts: () => httpClient.get("/api/products"),

  buySubscribe: (data: { priceId: number }) =>
    httpClient.post("/api/payments/buy", data),

  getSubscribes: () => httpClient.get("/api/subscribe/self"),

  changeSubscribe: (data: { productId: number; subscribeId: number }) =>
    httpClient.post("/api/subscribe/change-product", data),
};

const codes = {
  activateCode: (data: { code: string }) =>
    httpClient.post("api/code/activate", data),

  manageSelfCodes: (data: { codesIds: number[]; subscribeId: number }) =>
    httpClient.put("/api/code/manage", data),
};

export const apiRequests = {
  user,
  products,
  codes,
};
