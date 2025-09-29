import { IconName, WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Flex } from "@/presentation/styles/global-styles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface InfoCardProps {
  iconName: IconName;
  iconColor?: string;
  title: string;
  value: string | number;
}

export const InfoCard = ({ iconName, iconColor = Colors.secondaryDark, title, value }: InfoCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardDescription}>
        <WinnixIcon name={iconName} size={22} color={iconColor} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <Text style={styles.cardImportant}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    ...Flex.columnCenter,
    borderWidth: 1,
    borderColor: Colors.secondary,
    minHeight: 100,
    minWidth: "45%",
    padding: 8,
    borderRadius: 8,
    overflow: "hidden",
  },

  cardDescription: {
    ...Flex.rowCenter,
    gap: 6,
    marginBottom: 8,
  },

  cardTitle: {
    color: Colors.gray,
    fontSize: 16,
  },

  cardImportant: {
    color: Colors.light,
    fontSize: 18,
  },
});
