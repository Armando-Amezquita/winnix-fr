import React from "react";
import { TournamentItem } from "../tournamentItem/TournamentItem";
// import { router } from "expo-router";

const Teams = () => {
  return (
    <TournamentItem
      label='Equipo 1'
      // onPressCard={() => router.push(`/tabs/team/${1}`)}
      onPressCard={() => console.log("")}
    />
  );
};

export default Teams;
