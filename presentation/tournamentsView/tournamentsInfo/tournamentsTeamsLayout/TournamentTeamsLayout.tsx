import { Colors, Flex, Radius } from "@/presentation/styles/global-styles";
import { CustomText } from "@/presentation/theme/components/CustomText";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

interface Team {
  _id: string;
  name: string;
  captain: string;
  status: "active" | "inactive" | "delete";
  statusLabel?: string;
  members: { current: number; max: number };
  victories: number;
  defeats: number;
  logo?: any;
}

const statusMap: Record<Team["status"], string> = {
  active: "Activo",
  inactive: "Inactivo",
  delete: "Eliminado",
};

const fakeTeams: Team[] = [
  {
    _id: "team_1",
    name: "Thunder Warriorsjsjsj",
    captain: "Alex Rodriguez",
    status: "active",
    members: { current: 5, max: 5 },
    victories: 8,
    defeats: 3,
    logo: require("../../../../assets/icons/tournament.png"),
  },
  {
    _id: "team_2",
    name: "Cyber Hunters",
    captain: "Maria Gomez",
    status: "delete",
    members: { current: 4, max: 5 },
    victories: 6,
    defeats: 5,
    logo: require("../../../../assets/icons/tournament.png"),
  },
  {
    _id: "team_3",
    name: "Phoenix Rising",
    captain: "Juan Perez",
    status: "inactive",
    members: { current: 3, max: 5 },
    victories: 2,
    defeats: 7,
    logo: require("../../../../assets/icons/tournament.png"),
  },
];

export const TournamentTeamsLayout = () => {
  const [teams, setTeams] = useState(fakeTeams);

  useEffect(() => {
    const formatted = fakeTeams.map((team) => ({
      ...team,
      statusLabel: statusMap[team.status],
    }));
    setTeams(formatted);
  }, []);

  return (
    <View style={styles.content}>
      {teams.map((item) => (
        <View key={item._id} style={styles.TournamentTeamsLayout__container}>
          {/* Encabezado */}
          <View style={styles.header}>
            {item.logo && <Image source={item.logo} style={styles.logo} />}
            <View style={styles.headerInfo}>
              <CustomText label={item.name} style={styles.teamName} size={18} weight='bold' singleLine />
              <CustomText style={styles.captain} label={`Cap: ${item.captain}`} singleLine />
            </View>
            <CustomText
              label={item.statusLabel || ""}
              style={[
                styles.status,
                {
                  backgroundColor: item.status === "active" ? Colors.primary : item.status === "delete" ? Colors.error : Colors.gray,
                },
              ]}
            />
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <CustomText label='Miembros' style={styles.statLabel} />
              <CustomText label={`${item.members.current}/${item.members.max}`} style={styles.statValue} />
            </View>
            <View style={styles.statBox}>
              <CustomText label='Victorias' style={styles.statLabel} />
              <CustomText label={`${item.victories}`} style={[styles.statValue, { color: Colors.primary }]} />
            </View>
            <View style={styles.statBox}>
              <CustomText label='Derrotas' style={styles.statLabel} />
              <CustomText label={`${item.defeats}`} style={[styles.statValue, { color: Colors.error }]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 18,
    gap: 24,
  },
  TournamentTeamsLayout__container: {
    borderColor: Colors.grayLight,
    backgroundColor: "rgba(42, 49, 83, .3)",
    borderWidth: 1,
    borderRadius: Radius.medium,
    paddingVertical: 12,
    paddingHorizontal: 15,
    minHeight: 170,
    width: "100%",
    gap: 12,
  },
  header: {
    ...Flex.rowCenter,
    justifyContent: "space-around",
    width: "100%",
    gap: 8,
  },
  logo: {
    width: 100,
    height: 80,
  },
  headerInfo: {
    flex: 7,
    gap: 4,
  },
  teamName: {
    fontSize: 20,
  },
  captain: {
    color: Colors.gray,
    fontSize: 16,
  },
  status: {
    flex: 3,
    padding: 8,
    borderRadius: Radius.medium,
  },
  statsRow: {
    ...Flex.rowCenter,
    justifyContent: "space-evenly",
  },
  statBox: {
    ...Flex.columnCenter,
    gap: 4,
  },
  statLabel: {
    color: Colors.gray,
    fontSize: 16,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
