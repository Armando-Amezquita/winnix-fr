import { AxiosAdapter } from "@/config/adapters/http/axios.adapter";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { Platform } from "react-native";

const STAGE = process.env.EXPO_PUBLIC_STATE || "dev";

export const API_URL =
  STAGE === "prod" ? process.env.EXPO_PUBLIC_API_URL : Platform.OS === "ios" ? process.env.EXPO_PUBLIC_API_IOS : process.env.EXPO_PUBLIC_API_URL_ANDROID;

const API_BASE_URL = "http://192.168.10.10:7002/api";

// Instancia pública (login, register, forgotPassword...)
export const authFetcher = new AxiosAdapter({
  baseUrl: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Instancia privada (con tokens e interceptores)
export const privateFetcher = new AxiosAdapter({
  baseUrl: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Agregamos interceptor SOLO a la privada
privateFetcher.instance.interceptors.request.use(async (config) => {
  const token = await SecureStorageAdapter.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
