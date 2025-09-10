import React, { useRef, useState } from "react";
import { Alert, KeyboardAvoidingView, Pressable, ScrollView, TextInput, View } from "react-native";

import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { ThemedText } from "@/presentation/theme/components/ThemedText";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";
import { router } from "expo-router";

const LoginScreen = () => {
  const { login } = useAuthStore();
  const [isActive, setisActive] = useState(false);

  const primaryColor = useThemeColor({}, "primary");
  const textColor = useThemeColor({}, "text");

  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    const { email, password } = form;
    const wasSuccessful = await login(email, password);

    if (wasSuccessful) {
      router.replace("/winnix/(home)");
      return;
    }
    Alert.alert("Error", "credenciales no validas");
  };

  //Referencia para que cuando se toque el view haga focus en el input
  const inputRef = useRef<TextInput>(null);

  return (
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1, justifyContent: "center", alignContent: "center", paddingTop: 70 }}>
      <ScrollView>
        <ThemedText>Login Screen</ThemedText>
        <View onTouchStart={() => inputRef.current?.focus()}>
          <TextInput
            ref={inputRef}
            onChangeText={(value) => setform({ ...form, email: value })}
            value={form.email}
            style={{ borderColor: isActive ? primaryColor : "#ccc", color: "#fff" }}
            onFocus={() => setisActive(true)}
            onBlur={() => setisActive(false)}
            placeholder='Correo electronico'
            keyboardType='email-address'
            autoCapitalize='none'
          />
        </View>
        <View>
          <TextInput
            ref={inputRef}
            onChangeText={(value) => setform({ ...form, password: value })}
            value={form.password}
            style={{ borderColor: isActive ? primaryColor : "#ccc", color: "#fff" }}
            onFocus={() => setisActive(true)}
            onBlur={() => setisActive(false)}
            placeholder='contraseña'
            keyboardType='email-address'
            autoCapitalize='none'
          />
        </View>

        <Pressable onPress={onLogin} style={{ margin: 10, backgroundColor: "violet" }}>
          <ThemedText>Ingresar</ThemedText>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
