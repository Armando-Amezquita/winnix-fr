import * as Haptics from "expo-haptics";
import { router, useRouter } from "expo-router";
import { Alert, Linking } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { authActions } from "@/core/auth/actions/auth-actions";
import { useCustomForm } from "@/hooks/useCustomForm";
import { signUpSchema } from "@/presentation/schemas/signUpSchema";
import { SignUpFormData } from "@/presentation/types/SignUpData";

export const UseSignUp = () => {
  const navigate = useRouter();
  const { top } = useSafeAreaInsets();

  const { control, handleSubmit, errors, isSubmitting, isDisabled } = useCustomForm<SignUpFormData>(signUpSchema);

  const onSignUp = async (payload: SignUpFormData) => {
    const wasSuccessful = await authActions.signUp(payload);

    if (wasSuccessful) {
      router.replace("/winnix/(home)");
      return;
    }
    Alert.alert("Error", "credenciales no validas");
  };

  const handleTermsClick = () => {
    Linking.openURL("https://example.com/terms");
  };

  return {
    //Props
    top,

    //Methods
    control,
    handleSubmit,
    errors,
    isSubmitting,
    isDisabled,
    onSignUp,
    navigate,
    Haptics,
    handleTermsClick,
  };
};
