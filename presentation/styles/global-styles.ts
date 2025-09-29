import { StyleSheet } from "react-native";

export const Colors = {
  // primary: "#0ef6cc",
  primary: "#00c897",
  // primary: "#39ff14",
  // primary: "#a020f0",
  primaryDark: "#0bc5a2",
  primaryDark2: "#1A4139",
  greenDark: "#155B30",

  secondaryDark: "#2563EB",
  secondary: "#003366",
  secondaryLigth: "#1F6AE0",

  // dark: "#1b1b1b",
  // dark: "#1b2223",
  dark: "#0c0f2e",
  backgroundLight2: "#2A3153",
  darkDark: "#101617",
  // gray: "#3a4f50",
  gray: "#999",
  grayLight: "#55616F",
  grayDark: "#2b3c3d",
  light: "#f4fefd",
  lightDark: "#cfdede",
  backgroundLight: "#202b2e",
  error: "#ff5c5c",

  yellow: "#EAB308",
  blueDark: "#192130",
};

export const Fonts = {
  small: 15,
  normal: 20,
  large: 25,
  extraLarge: 30,
};

export const Flex = StyleSheet.create({
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  columnCenter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const FlexColumCenter = StyleSheet.create({
  displayFlex: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Radius = {
  small: 5,
  normal: 10,
  medium: 15,
  big: 20,
  extraBig: 25,
};

export const Padding = {
  small: 5,
  normal: 10,
  medium: 15,
  big: 20,
  extraBig: 25,
};

export const ErrorMessage = {
  color: Colors.error,
  marginTop: 4,
  fontSize: Fonts.small,
};
