import { WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Fonts } from "@/presentation/styles/global-styles";
import CalendarDates from "@/presentation/tournamentsView/calendar/CalendarDates";
import Description from "@/presentation/tournamentsView/description/Description";
import Players from "@/presentation/tournamentsView/players/Players";
import Teams from "@/presentation/tournamentsView/teams/Teams";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TournamentDetails = () => {
  const { id } = useLocalSearchParams();
  const { height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  const router = useRouter();

  const data = [
    { id: 1, label: "Descripción" },
    { id: 2, label: "Equipos" },
    { id: 3, label: "Fechas" },
    { id: 4, label: "Jugadores" },
    { id: 6, label: "Fama" },
  ];

  const [viewSelected, setViewSelected] = useState("Descripción");
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleSaveFavorite = () => {
    setFavorite(!favorite);
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleChangeView = (view: string) => {
    setViewSelected(view);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.dark }}>
      <Image
        source={require("../imgT.jpg")}
        style={[
          styles.portrait,
          {
            height: height * 0.5,
          },
        ]}
      />

      <Pressable
        onPress={handleSaveFavorite}
        style={[
          styles.like,
          {
            top: top,
          },
        ]}>
        <WinnixIcon name={favorite ? "heart" : "heart-outline"} size={35} color={favorite ? Colors.primary : Colors.gray} />
      </Pressable>

      <Pressable
        onPress={handleGoBack}
        style={[
          styles.back,
          {
            top: top,
          },
        ]}>
        <WinnixIcon name={"chevron-back-outline"} size={35} color={Colors.light} />
      </Pressable>

      <View
        style={[
          styles.shadow,
          {
            height: height * 0.5,
          },
        ]}
      />

      <Text style={styles.nameTournament}>Campeonato</Text>

      <View style={styles.contentOptions}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleChangeView(item.label)}>
              <Text
                style={[
                  styles.optionsTitle,
                  {
                    color: viewSelected === item.label ? Colors.primary : Colors.gray,
                  },
                ]}>
                {item.label}
              </Text>
            </Pressable>
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.contentView}>
        {viewSelected === "Descripción" && <Description />}
        {viewSelected === "Equipos" && <Teams />}
        {viewSelected === "Fechas" && <CalendarDates />}
        {viewSelected === "Jugadores" && <Players />}
      </View>
    </ScrollView>
  );
};

export default TournamentDetails;

const styles = StyleSheet.create({
  portrait: {
    width: "100%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },

  like: {
    position: "absolute",
    right: 20,
    zIndex: 10,
    elevation: 10,
  },

  back: {
    position: "absolute",
    left: 20,
    zIndex: 10,
    elevation: 10,
  },

  shadow: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderEndStartRadius: 80,
    borderEndEndRadius: 80,
  },

  nameTournament: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.light,
    textAlign: "center",
    top: -30,
  },

  contentOptions: {
    width: "90%",
    marginHorizontal: "auto",
    top: -15,
  },

  optionsTitle: {
    fontSize: Fonts.large,
    marginRight: 20,
  },

  contentView: {
    width: "90%",
    marginHorizontal: "auto",
    marginVertical: 10,
  },
});
