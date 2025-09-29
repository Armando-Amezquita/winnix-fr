import { IconName, WinnixIcon } from "@/presentation/plugins/Icon";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

type GradientCardProps = {
  colors?: [ColorValue, ColorValue, ...ColorValue[]];
  iconName?: IconName;
  iconBackground?: string;
  iconStyle?: ViewStyle;
  title: string;
  titleStyle?: TextStyle;
  value: string | number;
  valueStyle?: TextStyle;
  borderColor?: string;
  containerStyle?: ViewStyle;
};

export const GradientCard = ({
  colors = ["rgba(30,62,166,0.9)", "rgba(77,33,133,0.9)"],
  iconName,
  iconBackground = "#333",
  iconStyle,
  title,
  titleStyle,
  value,
  valueStyle,
  borderColor = "#ddd",
  containerStyle,
}: GradientCardProps) => {
  return (
    <LinearGradient colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[styles.card, { borderColor: borderColor }, containerStyle]}>
      {iconName && <WinnixIcon name={iconName} style={[styles.icon, { backgroundColor: iconBackground }]} />}
      <View>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.value, valueStyle]}>{value}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
  },
  icon: {
    padding: 10,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    color: "#ccc",
  },
  value: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
