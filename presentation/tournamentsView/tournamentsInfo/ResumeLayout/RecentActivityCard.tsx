import { IconName, WinnixIcon } from "@/presentation/plugins/Icon";
import { StyleSheet, Text, View } from "react-native";

import { Colors, Flex, Radius } from "@/presentation/styles/global-styles";

export type ActivityType = "match" | "team" | "player";

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  subtitle: string;
}

interface Props {
  activities: Activity[];
}

const iconMap: Record<ActivityType, { name: string; color: string }> = {
  match: { name: "game-controller-outline", color: Colors.secondaryLigth },
  team: { name: "people-outline", color: Colors.primary },
  player: { name: "person-outline", color: Colors.yellow },
};

export const RecentActivityCard: React.FC<Props> = ({ activities }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <WinnixIcon name='notifications-outline' size={30} color={Colors.yellow} />
        <Text style={styles.headerText}>Actividad Reciente</Text>
      </View>

      {activities.slice(0, 3).map((activity) => {
        const icon = iconMap[activity.type];
        return (
          <View key={activity.id} style={styles.row}>
            <WinnixIcon name={icon.name as IconName} size={30} color={icon.color} />
            <View style={styles.textContainer}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>
                {activity.title}
              </Text>
              <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>
                {activity.subtitle}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.grayLight,
    backgroundColor: "rgba(42, 49, 83, .3)",
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: 24,
    minHeight: 200,
    width: "100%",
    gap: 12,
  },
  header: {
    ...Flex.rowCenter,
    justifyContent: "flex-start",
    gap: 12,
    marginBottom: 24,
  },
  headerText: {
    color: Colors.light,
    fontSize: 24,
    fontWeight: "bold",
  },
  row: {
    ...Flex.rowCenter,
    justifyContent: "flex-start",
    gap: 12,
  },
  title: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: "400",
  },
  textContainer: {
    width: "90%",
  },
  subtitle: {
    color: Colors.gray,
    fontSize: 14,
    fontWeight: "400",
  },
});
