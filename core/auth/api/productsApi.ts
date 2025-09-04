import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import axios from "axios";
import { Platform } from "react-native";

const STAGE = process.env.EXPO_PUBLIC_STATE || "dev";

export const API_URL =
  STAGE === "prod" ? process.env.EXPO_PUBLIC_API_URL : Platform.OS === "ios" ? process.env.EXPO_PUBLIC_API_IOS : process.env.EXPO_PUBLIC_API_URL_ANDROID;

const produtsApi = axios.create({
  baseURL: "http://192.168.10.11:7002/api",
  //   baseURL: "http://localhost:7002/api",
});

// Intercector
produtsApi.interceptors.request.use(async (config) => {
  // Verificar si existe un token en secure storage
  const token = await SecureStorageAdapter.getItem("accessToken");
  console.log("token interceptor :>> ", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Interceptor de respuesta
produtsApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Si la respuesta es 401 y no hemos intentado refrescar aún
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // 1. Obtener refreshToken guardado en SecureStorage
        const refreshToken = await SecureStorageAdapter.getItem("refreshToken");

        if (!refreshToken) {
          throw new Error("No refresh token");
        }

        // 2. Pedir nuevo access token al backend
        const resp = await axios.post(`${API_URL}/auth/refresh`, {
          refreshToken,
        });

        const newAccessToken = resp.data.accessToken;

        // 3. Guardar nuevo accessToken
        await SecureStorageAdapter.setItem("token", newAccessToken);

        // 4. Reintentar la petición original con el token nuevo
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return produtsApi(originalRequest);
      } catch (refreshError) {
        // Si falla el refresh → desloguear usuario
        await SecureStorageAdapter.deleteItem("accessToken");
        await SecureStorageAdapter.deleteItem("refreshToken");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export { produtsApi };
