import { FeaturedNews } from "@/presentation/dashboard/FeaturedNews";
import { NextEvents } from "@/presentation/dashboard/NextEvents/NextEvents";
import { Sponsors } from "@/presentation/dashboard/sponsor/Sponsor";
import { MainContainerView } from "@/presentation/theme/components/MainContainerView";
import React from "react";
import { ScrollView } from "react-native";

const Dashboard = () => {
  return (
    <MainContainerView>
      <ScrollView>
        <FeaturedNews />
        <NextEvents />
        <Sponsors />
      </ScrollView>
    </MainContainerView>
  );
};

export default Dashboard;
