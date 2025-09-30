import { WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Flex, Radius } from "@/presentation/styles/global-styles";
import { StyleSheet, Text, View } from "react-native";

type Stat = {
  label: string;
  value: string | number;
};

type Props = {
  title?: string;
  stats: Stat[];
};

export const TournamentStatsCard = ({ title = "Estadísticas del torneo", stats }: Props) => {
  return (
    <View style={styles.TournamentStatsCard__container}>
      <View style={styles.header}>
        <WinnixIcon name='stats-chart-outline' size={30} color={Colors.primary} />
        <Text style={styles.headerText}>{title}</Text>
      </View>

      {stats.map((stat, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.label}>{stat.label}</Text>
          <Text style={styles.value}>{stat.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  TournamentStatsCard__container: {
    borderColor: Colors.grayLight,
    backgroundColor: "rgba(42, 49, 83, .3)",
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: 24,
    minHeight: 200,
    width: "100%",
    gap: 12,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginBottom: 24,
  },
  headerText: {
    color: Colors.light,
    fontSize: 24,
    fontWeight: "bold",
  },
  row: {
    ...Flex.rowCenter,
    justifyContent: "space-between",
  },
  label: {
    color: Colors.light,
    fontSize: 18,
  },
  value: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: "bold",
  },
});
