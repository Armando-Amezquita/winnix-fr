import { WinnixIcon } from "@/presentation/plugins/Icon";
import { Tabs } from "expo-router";
import React from "react";
// import { Header } from "@/presentation/components/header/Header";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='dashboard/index'
        options={{
          title: `Noticias`,
          tabBarIcon: ({ color }) => <WinnixIcon size={28} name='home-outline' color={color} />,
        }}
      />
      <Tabs.Screen
        name='(tournamentStack)'
        options={{
          headerShown: false,
          title: `Torneos`,
          tabBarIcon: ({ color }) => <WinnixIcon size={28} name='football-outline' color={color} />,
        }}
      />
      <Tabs.Screen
        name='calendar/index'
        options={{
          title: `Calendario`,
          tabBarIcon: ({ color }) => <WinnixIcon size={28} name='calendar-outline' color={color} />,
        }}
      />
      <Tabs.Screen
        name='notifications/index'
        options={{
          title: `Notificaciones`,
          tabBarIcon: ({ color }) => <WinnixIcon size={28} name='notifications-outline' color={color} />,
        }}
      />
      <Tabs.Screen
        name='(exploreStack)'
        options={{
          headerShown: false,
          title: `Explorar`,
          tabBarIcon: ({ color }) => <WinnixIcon size={28} name='grid-outline' color={color} />,
        }}
      />
    </Tabs>
  );
}
