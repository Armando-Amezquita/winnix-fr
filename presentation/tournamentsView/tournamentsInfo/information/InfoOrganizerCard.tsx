import { WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Flex } from "@/presentation/styles/global-styles";
import { CustomText } from "@/presentation/theme/components/CustomText";
import { GradientContainer } from "@/presentation/theme/components/GradientCard";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface Props {
  organizerName: string;
  organizerBy: string;
  description: string;
  stats: {
    tournaments: string | number;
    players: string | number;
    prizes: string;
  };
  imageSource: any;
}

export const TournamentOrganizerCard: React.FC<Props> = ({ organizerName, organizerBy, description, stats, imageSource }) => {
  return (
    <GradientContainer colors={["#23283D", "#541C81"]} borderColor='#541C81'>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <WinnixIcon name='ribbon-outline' size={30} color={Colors.yellow} />
          <CustomText label='Organizador del Torneo' size={20} />
        </View>

        {/* Organizer Info */}
        <View style={styles.organizerInfo}>
          <Image source={imageSource} style={styles.organizerImage} />
          <View style={styles.organizerDetails}>
            <CustomText label={organizerName} size={24} weight='bold' />
            <View style={styles.organizerBy}>
              <CustomText label='Organizador:' />
              <CustomText label={organizerBy} color={Colors.primary} weight='bold' />
            </View>
          </View>
        </View>

        {/* Description */}
        <CustomText label={description} style={styles.description} color={Colors.light} weight='bold' />

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <CustomText label='Torneos:' />
            <CustomText label={String(stats.tournaments)} size={20} weight='bold' />
          </View>
          <View style={styles.statItem}>
            <CustomText label='Jugadores:' />
            <CustomText label={String(stats.players)} size={20} weight='bold' />
          </View>
          <View style={styles.statItem}>
            <CustomText label='Premios:' />
            <CustomText label={stats.prizes} size={20} weight='bold' />
          </View>
        </View>
      </View>
    </GradientContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Flex.columnCenter,
    width: "100%",
    gap: 12,
  },
  header: {
    ...Flex.rowCenter,
    width: "100%",
    justifyContent: "flex-start",
    gap: 4,
  },
  organizerInfo: {
    ...Flex.rowCenter,
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 8,
  },
  organizerImage: {
    width: 120,
    height: 80,
  },
  organizerDetails: {
    ...Flex.columnCenter,
    alignItems: "flex-start",
    gap: 2,
  },
  organizerBy: {
    ...Flex.rowCenter,
    gap: 4,
  },
  description: {
    textAlign: "justify",
  },
  statsContainer: {
    ...Flex.rowCenter,
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 12,
  },
  statItem: {
    alignItems: "center",
  },
});
