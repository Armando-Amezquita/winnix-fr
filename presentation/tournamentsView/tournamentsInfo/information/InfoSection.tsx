import { IconName, WinnixIcon } from "@/presentation/plugins/Icon";
import { Flex, Radius } from "@/presentation/styles/global-styles";
import { CustomText } from "@/presentation/theme/components/CustomText";
import React from "react";
import { StyleSheet, View } from "react-native";

interface Rule {
  _id: string;
  text: string;
}

interface TournamentSectionProps {
  title: string;
  icon: IconName;
  color: string;
  colorIcon?: string;
  rules: Rule[];
}

export const TournamentSection: React.FC<TournamentSectionProps> = ({ title, icon, color, colorIcon, rules }) => {
  return (
    <View style={[styles.sectionContainer, { borderColor: color }]}>
      {/* Header */}
      <View style={[Flex.rowCenter, { justifyContent: "flex-start", gap: 8 }]}>
        <WinnixIcon name={icon} size={30} color={colorIcon ?? color} />
        <CustomText label={title} size={20} />
      </View>

      {/* Rules */}
      <View style={styles.rulesContainer}>
        {rules.map((rule, index) => (
          <View key={index} style={styles.ruleItem}>
            <CustomText label={`• ${rule.text}`} size={16} style={{ textAlign: "justify" }} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: "100%",
    marginTop: 8,
    borderWidth: 1,
    borderRadius: Radius.normal,
    padding: 12,
    gap: 8,
  },
  rulesContainer: {
    width: "100%",
    gap: 8,
  },
  ruleItem: {
    width: "100%",
    justifyContent: "flex-start",
  },
});
