import { WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors } from "@/presentation/styles/global-styles";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
// import { router } from "expo-router";

const Players = () => {
  return (
    <Pressable
      // onPress={() => router.push(`/tabs/player/${1}`)}
      onPress={() => console.log("")}
      style={{
        backgroundColor: Colors.grayDark,
        paddingHorizontal: 10,
        paddingTop: 20,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
        flexDirection: "row",
      }}>
      <Pressable onPress={() => console.log("heart")} style={{ position: "absolute", top: 10, right: 15, zIndex: 2 }}>
        <WinnixIcon
          size={30}
          // name={favorite ? "heart" : "heart-outline"}
          // color={favorite ? Colors.primary : Colors.gray}
          name={"heart-outline"}
          color={Colors.gray}
        />
      </Pressable>

      <WinnixIcon style={{ position: "absolute", bottom: 15, right: 15 }} name={"chevron-forward-outline"} size={30} color={Colors.gray} />

      <Image source={require("./cris2.png")} style={{ width: 150, height: 150 }} />

      <View
        style={{
          justifyContent: "center",
        }}>
        <Text style={{ fontSize: 20, color: Colors.primaryDark }}>Cristiano Ronaldo</Text>
        <Text style={{ fontSize: 20, color: Colors.light }}>Juventus</Text>
      </View>
    </Pressable>
  );
};

export default Players;
