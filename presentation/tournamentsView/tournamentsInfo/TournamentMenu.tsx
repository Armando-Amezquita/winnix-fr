import { IconName, WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Flex, Radius } from "@/presentation/styles/global-styles";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type MenuItem = {
  key: string;
  label: string;
  icon: IconName;
};

type Props = {
  items: MenuItem[];
  activeKey: string;
  onSelect: (key: string) => void;
};

export const TournamentMenu = ({ items, activeKey, onSelect }: Props) => {
  return (
    <View style={styles.container}>
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <Pressable key={item.key} onPress={() => onSelect(item.key)} style={[styles.item, { backgroundColor: isActive ? Colors.secondaryDark : "transparent" }]}>
            <WinnixIcon name={item.icon} size={25} color={isActive ? Colors.light : Colors.gray} />
            <Text style={[styles.label, { color: isActive ? Colors.light : Colors.gray }]}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.secondaryLigth,
    borderRadius: Radius.medium,
    height: 100,
    padding: 4,
    ...Flex.rowCenter,
    gap: 10,
  },
  item: {
    ...Flex.columnCenter,
    height: "100%",
    flex: 1,
    borderRadius: 4,
  },
  label: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "500",
  },
});
