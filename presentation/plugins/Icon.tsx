import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

export type IconName = ComponentProps<typeof Ionicons>["name"];

interface Props {
  name: IconName;
  size?: number;
  color?: string;
  style?: ComponentProps<typeof Ionicons>["style"];
}

export const WinnixIcon = ({ name, size = 24, color = Colors.light.background, style }: Props) => {
  return <Ionicons name={name} size={size} color={color} style={style} />;
};
