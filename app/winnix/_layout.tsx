import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React, { useEffect } from "react";
import { ActivityIndicator, Button, View } from "react-native";

const CheckAuthenticationLayout = () => {
  const { status, checkStatus, logout } = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, []);

  if (status === "checking") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginBottom: 5 }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (status === "unauthenticated") {
    return <Redirect href='/auth/login' />;
  }

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        headerRight: () => <Button title='Logout' color='red' onPress={logout} />,
      }}>
      <Drawer.Screen
        name='tabs'
        options={{
          drawerLabel: "Dashboard",
          title: "Dashboard",
        }}
      />

      <Drawer.Screen
        name='profile'
        options={{
          drawerLabel: "Profile",
          title: "My Profile",
        }}
      />

      <Drawer.Screen
        name='settings'
        options={{
          drawerLabel: "Settings",
          title: "Settings",
        }}
      />

      <Drawer.Screen
        name='ourTournaments'
        options={{
          drawerLabel: "Mis torneos",
          title: "Test",
        }}
      />
    </Drawer>
  );
};

export default CheckAuthenticationLayout;
