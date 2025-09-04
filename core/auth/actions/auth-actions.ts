import { produtsApi } from "../api/productsApi";

export interface AuthResponse {
  email: string;
  token: string;
  accessToken: string;
  refreshToken: string;
}

const returnUserToken = (data: AuthResponse): { email: string; accessToken: string; refreshToken: string } => {
  const { email, accessToken, refreshToken } = data;
  console.log("data :>> ", data);

  return { email, accessToken, refreshToken };
};

export const authLogin = async (email: string, password: string) => {
  try {
    const { data } = await produtsApi.post<AuthResponse>("/auth/login-email", {
      email,
      password,
    });
    return returnUserToken(data);
  } catch (error) {
    console.log("error :>> ", error);
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const { data } = await produtsApi.get<AuthResponse>("/auth/check-status");
    console.log("data :>> ", data);

    return returnUserToken(data);
  } catch (error) {
    console.log("error authCheckStatus:>> ", error);
    return null;
  }
};
