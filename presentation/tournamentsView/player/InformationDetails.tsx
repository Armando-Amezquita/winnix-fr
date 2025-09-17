import { WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors } from "@/presentation/styles/global-styles";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  value: number;
  label: string;
  icon?: ComponentProps<typeof Ionicons>["name"];
  colorIcon?: string;
}

export const InformationDetails = ({ value = 0, label = "", icon, colorIcon = Colors.gray }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.value}>{value}</Text>
        {icon && <WinnixIcon name={icon} size={20} color={colorIcon} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    alignItems: "center",
    gap: 5,
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    color: Colors.primary,
    fontSize: 40,
    fontWeight: "bold",
  },
  label: {
    width: 80,
    flexWrap: "wrap",
    textAlign: "center",
    color: Colors.light,
  },
});
