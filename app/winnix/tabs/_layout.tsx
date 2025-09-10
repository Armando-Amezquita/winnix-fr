import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name='champions'
        options={{
          title: "champions",
          tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name='ejemplo'
        options={{
          title: "Ejemplo",
          tabBarIcon: ({ color, size }) => <Ionicons name='search-outline' size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
