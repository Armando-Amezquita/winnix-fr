import { Link } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function EjemploHome() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#fff" }}>Pantalla principal del Tab Ejemplo</Text>
      <Link href='/tabs/ejemplo/details' asChild>
        <Button title='Ir al detalle' />
      </Link>
    </View>
  );
}
