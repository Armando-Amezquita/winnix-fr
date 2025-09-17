import { useRouter } from "expo-router";
import * as Haptics from "expo-haptics";

import { useCustomForm } from "@/hooks/useCustomForm";
import { LoginFormData } from "@/presentation/types/LoginFormData";
import { loginSchema } from "@/presentation/schemas/loginSchema";

export const useTournament = () => {
  const navigate = useRouter();

  const { control, handleSubmit, errors, isSubmitting, isDisabled } = useCustomForm<LoginFormData>(loginSchema);

  const handleLogin = async (payload: LoginFormData) => {
    try {
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return {
    //Props

    //Methods
    control,
    handleSubmit,
    errors,
    isSubmitting,
    isDisabled,
    handleLogin,
    navigate,
    Haptics,
  };
};
