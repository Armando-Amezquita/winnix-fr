import { Stack } from "expo-router";
import React from "react";

export default function EjemploLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: "Listado Ejemplo" }} />
      <Stack.Screen name='details' options={{ title: "Detalle" }} />
    </Stack>
  );
}
