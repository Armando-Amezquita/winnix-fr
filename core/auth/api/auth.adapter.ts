import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { authFetcher, privateFetcher } from "./api.config";

type LoginPayload = {
  email: string;
  password: string;
};

type RegisterPayload = {
  email: string;
  password: string;
  name: string;
};

export const AuthAdapter = {
  login: async (payload: LoginPayload) => {
    const response = await authFetcher.instance.post("/auth/login-email", payload);

    // Guardamos tokens si existen
    if (response.data?.accessToken) {
      await SecureStorageAdapter.setItem("accessToken", response.data.accessToken);
    }
    if (response.data?.refreshToken) {
      await SecureStorageAdapter.setItem("refreshToken", response.data.refreshToken);
    }

    return response.data;
  },

  register: async (payload: RegisterPayload) => {
    const response = await authFetcher.instance.post("/auth/register", payload);
    return response.data;
  },

  logout: async () => {
    await SecureStorageAdapter.deleteItem("accessToken");
    await SecureStorageAdapter.deleteItem("refreshToken");
    return true;
  },

  refreshToken: async () => {
    const response = await privateFetcher.instance.post("/auth/check-status");

    if (response.data?.accessToken) {
      await SecureStorageAdapter.setItem("accessToken", response.data.accessToken);
    }

    return response.data;
  },
};
