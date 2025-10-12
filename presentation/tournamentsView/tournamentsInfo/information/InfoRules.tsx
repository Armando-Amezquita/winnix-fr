import { IconName, WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Flex } from "@/presentation/styles/global-styles";
import { CustomText } from "@/presentation/theme/components/CustomText";
import { GradientContainer } from "@/presentation/theme/components/GradientCard";
import React from "react";
import { View } from "react-native";
import { TournamentSection } from "./InfoSection";

interface TournamentRuleSection {
  _id: string;
  title: string;
  icon?: IconName;
  color?: string;
  rules?: { _id: string; text: string }[];
}

interface Props {
  tournamentRules: TournamentRuleSection[];
}

export const InfoRules: React.FC<Props> = ({ tournamentRules }) => {
  return (
    <GradientContainer colors={["#871C1C", "#541C81"]} borderColor='#541C81'>
      <View style={{ ...Flex.columnCenter, width: "100%", gap: 12 }}>
        {/* Header */}
        <View
          style={{
            ...Flex.rowCenter,
            width: "100%",
            justifyContent: "flex-start",
            gap: 4,
          }}>
          <WinnixIcon name='alert-circle-outline' size={30} color='#F26E6E' />
          <CustomText label='Reglas del Torneo' size={20} />
        </View>

        {/* Rules */}
        {tournamentRules && tournamentRules.length > 0 ? (
          tournamentRules.map((section) => (
            <TournamentSection key={section._id} title={section.title} icon={section.icon as IconName} color={section.color ?? ""} rules={section.rules ?? []} />
          ))
        ) : (
          <View style={{ width: "100%", marginTop: 12 }}>
            <CustomText label='Pronto se verá la información cuando sea agregada por el administrador.' color={Colors.gray} size={16} style={{ textAlign: "center" }} />
          </View>
        )}
      </View>
    </GradientContainer>
  );
};
