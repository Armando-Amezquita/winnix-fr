import { FlatList, View } from "react-native";

// import logo from "../../../assets/icons/tournament.png";
// import logo from "../../assets/icons/tournament.png";
import { IconName } from "@/presentation/plugins/Icon";
import { Colors } from "@/presentation/styles/global-styles";
import { TournamentTeamItem } from "./TournamentTeamItem";

import { router } from "expo-router";

const TournamentsList = () => {
  const tournaments = [
    {
      id: "1",
      label: "Copa Elite Gaming",
      state: "in-progress",
      img: require("../../assets/icons/tournament.png"),
      stats: [
        {
          _id: "s1",
          iconName: "people-outline" as IconName,
          title: "Participantes",
          value: "32 equipos",
          iconColor: Colors.secondaryDark,
        },
        {
          _id: "s2",
          iconName: "trophy-outline" as IconName,
          title: "Torneos",
          value: "5 activos",
          iconColor: Colors.primary,
        },
      ],
    },
    {
      id: "2",
      label: "Liga Pro Champions",
      state: "next",
      img: require("../../assets/icons/tournament.png"),
      stats: [
        {
          _id: "s3",
          iconName: "people-outline" as IconName,
          title: "Participantes",
          value: "20 equipos",
          iconColor: Colors.secondaryDark,
        },
        {
          _id: "s4",
          iconName: "pricetag-outline" as IconName,
          title: "Premio",
          value: "$3,000",
          iconColor: Colors.primary,
        },
      ],
    },
  ];

  const handleNavigate = (item: any) => {
    console.log("clic");
    console.log("item :>> ", item);
    router.push(`/winnix/tabs/(tournamentStack)/tournament/${item.id}`);
  };

  return (
    <View style={{ paddingBottom: 150 }}>
      <FlatList
        data={tournaments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TournamentTeamItem label={item.label} state={item.state} img={item.img} stats={item.stats} onPressCard={() => handleNavigate(item)} />}
        contentContainerStyle={{
          gap: 20,
          paddingBottom: 70,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TournamentsList;
