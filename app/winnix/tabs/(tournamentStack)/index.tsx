import { useTournament } from "@/presentation/hooks/tournamentStack/tournament/useTournament";

import { Colors, Fonts } from "@/presentation/styles/global-styles";
import { CustomSearch } from "@/presentation/theme/components/CustomSearch";
import { MainContainerView } from "@/presentation/theme/components/MainContainerView";
import TeamsList from "@/presentation/tournamentsView/TeamsList";
import TournamentsList from "@/presentation/tournamentsView/TournamentsList";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const OurTournaments = () => {
  const [search, setSearch] = useState("");
  const [viewSelected, setViewSelected] = useState("viewTournaments");

  const {
    // Properties
    //Methods
    control,
  } = useTournament(viewSelected);

  return (
    <MainContainerView>
      <View style={styles.tournaments}>
        <CustomSearch name='search' control={control} placeholder='Escribe aquí...' iconLeft='search' />

        <View style={styles.tournamentsTagsContainer}>
          <Pressable
            onPress={() => setViewSelected("viewTournaments")}
            style={[
              styles.tournamentsTags,
              {
                backgroundColor: viewSelected === "viewTournaments" ? "#2563EB" : Colors.dark,
              },
            ]}>
            <Ionicons name='trophy-outline' size={22} color={Colors.light} style={{ marginRight: 6 }} />
            <Text
              style={[
                styles.tournamentsTagsText,
                {
                  color: viewSelected === "viewTournaments" ? Colors.light : Colors.gray,
                },
              ]}>
              TORNEOS
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setViewSelected("viewTeams")}
            style={[
              styles.tournamentsTags,
              {
                backgroundColor: viewSelected === "viewTeams" ? "#2563EB" : Colors.dark,
              },
            ]}>
            <Ionicons name='people-outline' size={22} color={Colors.light} style={{ marginRight: 6 }} />
            <Text
              style={[
                styles.tournamentsTagsText,
                {
                  color: viewSelected === "viewTeams" ? Colors.primary : Colors.gray,
                },
              ]}>
              EQUIPOS
            </Text>
          </Pressable>
        </View>

        <View>{viewSelected === "viewTournaments" ? <TournamentsList /> : <TeamsList />}</View>
      </View>
    </MainContainerView>
  );
};

export default OurTournaments;

const styles = StyleSheet.create({
  tournaments: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  tournamentsTitle: {
    color: Colors.light,
    fontSize: Fonts.large,
  },
  tournamentsTagsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderWidth: 1.5,
    borderRadius: 12,
    borderColor: Colors.secondary,
    shadowColor: Colors.secondary,
    alignItems: "center",
    backgroundColor: Colors.dark,
    marginVertical: 20,
    marginTop: 25,
  },
  tournamentsTags: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 5,
    width: "47%",
    borderBottomWidth: 1,
    paddingVertical: 12,
    height: 50,
    alignItems: "center",
    borderRadius: 10,
  },

  tournamentsTagsText: {
    fontSize: Fonts.normal,
    fontWeight: "bold",
  },
});
