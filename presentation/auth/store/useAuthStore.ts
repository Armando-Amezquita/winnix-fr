import { create } from "zustand";

import { authActions } from "@/core/auth/actions/auth-actions";
import { User } from "@/core/auth/interface/user";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";

export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

export interface AuthState {
  status: AuthStatus;
  accessToken?: string;
  refreshToken?: string;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
  changeStatus: (accessToken?: string, refreshToken?: string, user?: User) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  //Properties
  status: "checking",
  token: undefined,
  user: undefined,

  //Methods (Actions)
  changeStatus: async (accessToken?: string, refreshToken?: string, user?: User) => {
    if (!accessToken || !refreshToken || !user) {
      set({ status: "unauthenticated", accessToken: undefined, refreshToken: undefined, user: undefined });
      await SecureStorageAdapter.deleteItem("accessToken");
      await SecureStorageAdapter.deleteItem("refreshToken");
      return false;
    }

    set({ status: "authenticated", accessToken, refreshToken, user });
    await SecureStorageAdapter.setItem("accessToken", accessToken);
    await SecureStorageAdapter.setItem("refreshToken", refreshToken);

    return true;
  },

  login: async (email: string, password: string) => {
    const resp = await authActions.login(email, password);
    console.log("resp :>> ", resp);
    return get().changeStatus(resp?.accessToken, resp?.refreshToken, { email: resp?.email });
  },

  checkStatus: async () => {
    const resp = await authActions.checkStatus();
    if (!resp) {
      // Manera de actualizar un estado en zustand
      set({ status: "unauthenticated", accessToken: undefined, refreshToken: undefined, user: undefined });
      return;
    }
    set({ status: "authenticated", accessToken: resp.accessToken, refreshToken: resp.refreshToken, user: { email: resp.email } });
    return;
  },

  logout: async () => {
    await SecureStorageAdapter.deleteItem("token");
    set({ status: "unauthenticated", accessToken: undefined, refreshToken: undefined, user: undefined });
  },
}));
