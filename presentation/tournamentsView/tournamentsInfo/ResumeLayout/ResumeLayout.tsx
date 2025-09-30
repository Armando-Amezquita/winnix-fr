import React from "react";
import { ParticipationCard } from "./ParticipationCard";
import { Activity, RecentActivityCard } from "./RecentActivityCard";
import { TournamentStatsCard } from "./TournamentStatsCard";

export const ResumeLayout = () => {
  const statsData = [
    { label: "Encuentros jugados", value: "12 / 63" },
    { label: "Goles anotados", value: 120 },
    { label: "Jugador destacado", value: "Juan Pérez" },
    { label: "Avance del torneo", value: "20%" },
  ];

  const recentActivities: Activity[] = [
    { id: "1", type: "match", title: "Thunder vs Ciber", subtitle: "Partida finalizada" },
    { id: "2", type: "team", title: "Nuevo equipo registrado: Phoenix Rising hola", subtitle: "Hace 1 hora" },
    { id: "3", type: "player", title: "Jugador agregado: Juan Pérez", subtitle: "Hace 30 min" },
  ];
  return (
    <>
      {/* Join to tournament */}
      <ParticipationCard onPressButton={() => console.log("clic en participacion")} />

      {/* Statistics */}
      <TournamentStatsCard stats={statsData} />

      {/* Recently Activity */}
      <RecentActivityCard activities={recentActivities} />
    </>
  );
};
