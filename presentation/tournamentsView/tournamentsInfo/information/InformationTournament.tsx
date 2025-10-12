import { IconName } from "@/presentation/plugins/Icon";
import { Colors } from "@/presentation/styles/global-styles";
import React from "react";
import { View } from "react-native";
import { InfoContactCard } from "./InfoContactCard";
import { TournamentOrganizerCard } from "./InfoOrganizerCard";
import { InfoRewards } from "./InfoRewards";
import { InfoRules } from "./InfoRules";
import { InfoTimeLine } from "./InfoTimeLine";

export const InformationTournament = () => {
  const tournamentRules = [
    {
      _id: "1",
      title: "Equipos y Participación",
      icon: "people-outline" as IconName,
      color: "#F26E6E",
      rules: [
        { _id: "r1", text: "Máximo 5 jugadores por equipo" },
        { _id: "r2", text: "Edad mínima: 16 años" },
        { _id: "r3", text: "Registro obligatorio antes del 10" },
        { _id: "r4", text: "Solo jugadores verificados" },
      ],
    },
    {
      _id: "2",
      title: "Formato de Juego",
      icon: "game-controller-outline" as IconName,
      color: Colors.secondaryLigth,
      rules: [
        { _id: "r5", text: "Modalidad 5V5" },
        { _id: "r6", text: "Eliminación directa desde cuartos de final" },
      ],
    },
    {
      _id: "3",
      title: "Conducta y Sanciones",
      icon: "warning-outline" as IconName,
      color: Colors.yellow,
      rules: [
        { _id: "r7", text: "Respeto obligatorio hacia rivales y organizaciones" },
        { _id: "r8", text: "Descalificación por comportamiento antideportivo" },
      ],
    },
  ];

  return (
    <View
      style={{
        width: "100%",
        gap: 24,
        marginTop: 18,
      }}>
      <TournamentOrganizerCard
        organizerName='Elite Gaming'
        organizerBy='Feat'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        imageSource={require("../../../../assets/icons/tournament.png")}
        stats={{
          tournaments: 10,
          players: 100,
          prizes: "2 mill. +",
        }}
      />

      <InfoRules tournamentRules={tournamentRules} />

      <InfoRewards />

      <InfoTimeLine />

      <InfoContactCard />
    </View>
  );
};
