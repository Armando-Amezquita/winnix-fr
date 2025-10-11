import { WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Flex, Radius } from "@/presentation/styles/global-styles";
import { CustomButton } from "@/presentation/theme/components/CustomButton";
import { CustomText } from "@/presentation/theme/components/CustomText";
import { GradientContainer } from "@/presentation/theme/components/GradientCard";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

type Match = {
  id: number;
  teamA: string;
  teamB: string;
  scoreA?: number;
  scoreB?: number;
  status?: string;
  date?: string;
  stage?: string;
};

type BracketLayoutProps = {
  matches?: Match[];
  upcomingMatches?: Match[];
  onNavigateToDetails?: (matchId: number) => void;
};

export const BracketLayout = ({ matches = [], upcomingMatches = [], onNavigateToDetails }: BracketLayoutProps) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <View style={styles.bracketLayout_container}>
      <GradientContainer colors={["#23283D", "#541C81"]} borderColor='#541C81'>
        <View style={styles.bracketLayout_inner}>
          <View style={styles.bracketLayout_header}>
            <WinnixIcon name='git-network-outline' size={30} color={Colors.secondaryLigth} />
            <CustomText label='Cuartos de final' size={20} />
          </View>

          {matches.length > 0 ? (
            matches.map((item) => (
              <View key={item.id} style={styles.bracketLayout_matchCard}>
                {/* Equipos */}
                <View style={styles.bracketLayout_teams}>
                  <View style={styles.bracketLayout_teamRow}>
                    <Image source={require("../../../../assets/icons/tournament.png")} style={styles.bracketLayout_teamIcon} />
                    <CustomText label={truncateText(item.teamA, 14)} size={16} />
                  </View>
                  <View style={styles.bracketLayout_teamRow}>
                    <Image source={require("../../../../assets/icons/tournament.png")} style={styles.bracketLayout_teamIcon} />
                    <CustomText label={truncateText(item.teamB, 14)} size={16} />
                  </View>
                </View>

                {/* Marcadores */}
                <View style={styles.bracketLayout_scores}>
                  <CustomText label={item.scoreA?.toString() ?? "-"} size={22} />
                  <CustomText label={item.scoreB?.toString() ?? "-"} size={22} />
                </View>

                {/* Estado */}
                <CustomText
                  label={item.status ?? "Pendiente"}
                  size={16}
                  style={[
                    styles.bracketLayout_status,
                    {
                      backgroundColor: item.status === "Finalizado" ? Colors.secondaryLigth : item.status === "En curso" ? Colors.primary : Colors.gray,
                    },
                  ]}
                />
              </View>
            ))
          ) : (
            <CustomText label='Pronto se mostrarán los resultados de los partidos.' color={Colors.gray} size={16} style={styles.bracketLayout_emptyText} />
          )}
        </View>
      </GradientContainer>

      {/* --- Próximas partidas --- */}
      <GradientContainer colors={["#23283D", "#1E3A89"]} borderColor={Colors.secondaryLigth}>
        <View style={styles.bracketLayout_inner}>
          <View style={styles.bracketLayout_header}>
            <WinnixIcon name='time-outline' size={30} color={Colors.secondaryLigth} />
            <CustomText label='Próximas Partidas' size={20} />
          </View>

          {upcomingMatches.length > 0 ? (
            upcomingMatches.map((match) => (
              <View key={match.id} style={styles.bracketLayout_upcomingCard}>
                <View style={{ gap: 4 }}>
                  <View style={styles.bracketLayout_teamRow}>
                    <CustomText label={truncateText(match.teamA, 9)} size={16} />
                    <CustomText label='Vs' size={18} color={Colors.primary} weight='bold' />
                    <CustomText label={truncateText(match.teamB, 9)} size={16} />
                  </View>
                  <CustomText label={`${match.date ?? "Por definir"} - ${match.stage ?? ""}`} size={16} color={Colors.gray} style={{ textAlign: "left" }} />
                </View>
                <CustomButton label='Detalles' onPress={() => onNavigateToDetails?.(match.id)} stylePressable={{ flex: 1, maxWidth: 100 }} styleText={{ fontSize: 16 }} />
              </View>
            ))
          ) : (
            <CustomText label='Pronto verás los próximos enfrentamientos aquí.' color={Colors.gray} size={16} style={styles.bracketLayout_emptyText} />
          )}
        </View>
      </GradientContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  bracketLayout_container: {
    width: "100%",
    gap: 24,
    marginTop: 18,
  },
  bracketLayout_inner: {
    width: "100%",
    gap: 12,
  },
  bracketLayout_header: {
    ...Flex.rowCenter,
    justifyContent: "flex-start",
    gap: 8,
  },
  bracketLayout_matchCard: {
    ...Flex.rowCenter,
    justifyContent: "space-between",
    backgroundColor: Colors.dark,
    borderRadius: Radius.normal,
    padding: 12,
    gap: 12,
    height: 110,
  },
  bracketLayout_upcomingCard: {
    ...Flex.rowCenter,
    justifyContent: "space-between",
    backgroundColor: Colors.dark,
    borderRadius: Radius.normal,
    padding: 12,
    gap: 12,
  },
  bracketLayout_teams: {
    gap: 4,
  },
  bracketLayout_teamRow: {
    ...Flex.rowCenter,
    gap: 8,
  },
  bracketLayout_teamIcon: {
    width: 50,
    height: 40,
  },
  bracketLayout_scores: {
    gap: 18,
    height: "100%",
    ...Flex.columnCenter,
  },
  bracketLayout_status: {
    padding: 6,
    borderRadius: Radius.medium,
  },
  bracketLayout_emptyText: {
    textAlign: "center",
    marginVertical: 12,
  },
});
