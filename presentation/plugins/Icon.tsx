import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

interface Props {
  name: ComponentProps<typeof Ionicons>["name"];
  size?: number;
  color?: string;
  style?: ComponentProps<typeof Ionicons>["style"];
}

export const WinnixIcon = ({ name, size = 24, color = Colors.light.background, style }: Props) => {
  return <Ionicons name={name} size={size} color={color} style={style} />;
};
