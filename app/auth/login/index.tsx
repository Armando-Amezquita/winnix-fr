import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useLogin } from "@/presentation/hooks/auth/login/useLogin";
import { Colors, Fonts } from "@/presentation/styles/global-styles";
import { CustomButton } from "@/presentation/theme/components/CustomButton";
import { CustomFormView } from "@/presentation/theme/components/CustomFormView";
import { CustomInput } from "@/presentation/theme/components/CustomInput";
import { CustomLink } from "@/presentation/theme/components/CustomLink";

const Login = () => {
  const {
    // Properties
    //Methods
    control,
    handleSubmit,
    errors,
    isSubmitting,
    isDisabled,
    onLogin,
  } = useLogin();

  return (
    <CustomFormView>
      <View style={styles.view}>
        <Text style={styles.title}>Bienvenid@</Text>

        <CustomInput
          name='email'
          control={control}
          placeholder='ejemplo@google.com'
          label='Usuario o correo electrónico'
          iconRight='mail-outline'
          keyboardType='email-address'
          errorMessage={errors.email?.message}
        />

        <CustomInput
          name='password'
          control={control}
          placeholder='Contraseña'
          label='Contraseña'
          iconRight='eye-off-outline'
          isPassword
          errorMessage={errors.password?.message}
        />

        <CustomLink label='Recordar contraseña' href='/' style={styles.rememberPassword} />

        <CustomButton label={isSubmitting ? "Ingresando..." : "Ingresar"} onPress={handleSubmit(onLogin)} icon='football-outline' disabled={isDisabled || isSubmitting} />

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>¿No tienes cuenta?</Text>
          <CustomLink label='Registrate' href='/auth/register' />
        </View>
      </View>
    </CustomFormView>
  );
};

export default Login;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.dark,
    gap: 20,
    padding: 20,
    minHeight: "100%",
  },
  title: {
    fontSize: Fonts.extraLarge,
    fontWeight: "bold",
    color: Colors.primary,
  },
  rememberPassword: {
    width: "auto",
    alignSelf: "flex-end",
  },
  signUpContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 30,
  },
  signUpText: {
    color: Colors.light,
    fontWeight: "bold",
    fontSize: 20,
  },
});
