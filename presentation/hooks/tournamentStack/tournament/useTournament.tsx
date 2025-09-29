import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";

import { useCustomForm } from "@/hooks/useCustomForm";
import { useEffect } from "react";

export const useTournament = (tap: string) => {
  const navigate = useRouter();

  const { control, handleSubmit, isSubmitting, isDisabled } = useCustomForm();

  const handleSearch = async (payload: string) => {
    try {
      const filter = {};
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  // const onLogin = async (payload: LoginFormData) => {
  //   const { email, password } = payload;
  //   const wasSuccessful = await login(email, password);

  //   if (wasSuccessful) {
  //     router.replace("/winnix/tabs/dashboard");
  //     return;
  //   }
  //   Alert.alert("Error", "credenciales no validas");
  // };

  useEffect(() => {
    console.log("tap", tap);
  }, [tap]);

  return {
    //Props

    //Methods
    control,
    handleSubmit,
    isSubmitting,
    isDisabled,
    navigate,
    Haptics,
  };
};
