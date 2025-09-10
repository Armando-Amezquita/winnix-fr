import * as Haptics from "expo-haptics";
import { router, useRouter } from "expo-router";
import { Alert } from "react-native";

import { useCustomForm } from "@/hooks/useCustomForm";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { loginSchema } from "@/presentation/schemas/loginSchema";
import { LoginFormData } from "@/presentation/types/LoginFormData";

export const useLogin = () => {
  const { login } = useAuthStore();
  const navigate = useRouter();
  const { control, handleSubmit, errors, isSubmitting, isDisabled } = useCustomForm<LoginFormData>(loginSchema);

  const onLogin = async (payload: LoginFormData) => {
    const { email, password } = payload;
    const wasSuccessful = await login(email, password);

    if (wasSuccessful) {
      router.replace("/winnix/(home)");
      return;
    }
    Alert.alert("Error", "credenciales no validas");
  };

  return {
    //Props

    //Methods
    login,
    control,
    handleSubmit,
    errors,
    isSubmitting,
    isDisabled,
    onLogin,
    navigate,
    Haptics,
  };
};
