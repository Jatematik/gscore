import axios, { AxiosInstance } from "axios";
import { StoreType } from "src/store/store";

let store: StoreType;

export const injectStore = (_store: StoreType) => {
  store = _store;
};

const baseURL = "https://gscore-back.herokuapp.com/";

const httpClient: AxiosInstance = axios.create({
  baseURL,
});

httpClient.interceptors.request.use((config) => {
  const token = store.getState().user.token;

  if (!token) {
    return config;
  }

  if (config.withCredentials === false) {
    return config;
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    ...config.headers,
  };

  return { ...config, headers };
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      throw error.response.data;
    }

    if (error.data) {
      throw error.data;
    }

    throw error;
  }
);

export default httpClient;
