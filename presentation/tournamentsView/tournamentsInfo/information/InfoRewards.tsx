import { WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Flex, Radius } from "@/presentation/styles/global-styles";
import { CustomText } from "@/presentation/theme/components/CustomText";
import { GradientContainer } from "@/presentation/theme/components/GradientCard";
import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";

const fakeRewardsData = {
  mainPrizes: [
    { position: "1°", title: "Primer lugar", subtitle: "Campeones", reward: "2M COP" },
    { position: "2°", title: "Segundo lugar", subtitle: "Subcampeones", reward: "1.5M COP" },
    { position: "3°", title: "Tercer lugar", subtitle: "Semifinalistas", reward: "1M COP" },
  ],
  additionalPrizes: [
    { label: "Mejor jugador", reward: "100k" },
    { label: "Valla menos vencida", reward: "200k" },
    { label: "Goleador", reward: "300k" },
  ],
};

const prizeColors = [
  "rgba(103, 111, 125, 0.2)",
  "rgba(132, 75, 14, 0.2)",
  "rgba(121, 36, 22, 0.2)",
  "rgba(155, 93, 229, 0.2)",
  "rgba(241, 91, 181, 0.2)",
  "rgba(76, 79, 86, 0.2)",
];

const circleColors = ["#FDE68A", "#C7D2FE", "#D1FAE5", "#FDE2E4"];

interface RewardCardProps {
  position: string;
  title: string;
  subtitle: string;
  reward: string;
}

const RewardCard: React.FC<RewardCardProps> = ({ position, title, subtitle, reward }) => {
  // Fondo aleatorio
  const backgroundColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * prizeColors.length);
    return prizeColors[randomIndex];
  }, []);

  // Color aleatorio para el círculo (más suave)
  const circleColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * circleColors.length);
    return circleColors[randomIndex];
  }, []);

  return (
    <View style={[styles.InfoRewards__RewardCard, { backgroundColor }]}>
      <View style={styles.InfoRewards__RewardCardLeft}>
        <CustomText label={position} style={[styles.InfoRewards__PositionCircle, { backgroundColor: circleColor }]} size={24} weight='bold' />
        <View>
          <CustomText label={title} size={18} weight='bold' color={Colors.light} />
          <CustomText label={subtitle} color={Colors.light} />
        </View>
      </View>
      <CustomText label={reward} size={24} weight='bold' color={Colors.light} style={{ padding: 1 }} />
    </View>
  );
};

export const InfoRewards = () => {
  return (
    <GradientContainer colors={["#23283D", "#541C81"]} borderColor='#844B0E'>
      <View style={styles.InfoRewards__container}>
        {/* Header */}
        <View style={styles.InfoRewards__header}>
          <WinnixIcon name='cash-outline' size={30} color={Colors.primary} />
          <CustomText label='Distribución de Premios' size={20} weight='bold' />
        </View>

        {/* Premios principales */}
        <View style={styles.InfoRewards__listContainer}>
          {fakeRewardsData.mainPrizes.map((item, index) => (
            <RewardCard key={index} position={item.position} title={item.title} subtitle={item.subtitle} reward={item.reward} />
          ))}

          {/* Premios adicionales */}
          <View style={styles.InfoRewards__extraContainer}>
            <View style={styles.InfoRewards__extraHeader}>
              <WinnixIcon name='information-circle-outline' size={30} color={Colors.primary} />
              <CustomText label='Premios adicionales' size={18} weight='bold' />
            </View>

            <View style={styles.InfoRewards__extraList}>
              {fakeRewardsData.additionalPrizes.map((extra, index) => (
                <CustomText key={index} label={`- ${extra.label}: ${extra.reward}`} size={16} color={Colors.light} />
              ))}
            </View>
          </View>
        </View>
      </View>
    </GradientContainer>
  );
};

const styles = StyleSheet.create({
  InfoRewards__container: {
    ...Flex.columnCenter,
    justifyContent: "flex-start",
    gap: 8,
    width: "100%",
  },
  InfoRewards__header: {
    ...Flex.rowCenter,
    justifyContent: "flex-start",
    gap: 8,
    width: "100%",
  },
  InfoRewards__listContainer: {
    width: "100%",
    marginTop: 12,
    gap: 12,
  },
  InfoRewards__RewardCard: {
    ...Flex.rowCenter,
    justifyContent: "space-between",
    width: "100%",
    padding: 16,
    borderRadius: Radius.medium,
  },
  InfoRewards__RewardCardLeft: {
    ...Flex.rowCenter,
    gap: 12,
  },
  InfoRewards__PositionCircle: {
    borderRadius: 100,
    height: 60,
    width: 60,
    textAlign: "center",
    paddingVertical: 20,
    color: Colors.secondaryLigth,
  },
  InfoRewards__extraContainer: {
    ...Flex.columnCenter,
    width: "100%",
    backgroundColor: "#4D2F50",
    padding: 16,
    borderRadius: Radius.medium,
    borderColor: Colors.secondaryLigth,
    borderWidth: 1,
  },
  InfoRewards__extraHeader: {
    ...Flex.rowCenter,
    justifyContent: "flex-start",
    width: "100%",
    gap: 12,
  },
  InfoRewards__extraList: {
    ...Flex.columnCenter,
    alignItems: "flex-start",
    width: "100%",
    gap: 6,
    marginTop: 8,
  },
});
