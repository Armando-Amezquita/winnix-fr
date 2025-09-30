import { IconName, WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Flex, Fonts } from "@/presentation/styles/global-styles";
import { CustomFormView } from "@/presentation/theme/components/CustomFormView";
import { GradientCard } from "@/presentation/theme/components/GradientCard";
import { BracketLayout } from "@/presentation/tournamentsView/tournamentsInfo/bracketLayout/BracketLayout";
import { ResumeLayout } from "@/presentation/tournamentsView/tournamentsInfo/ResumeLayout/ResumeLayout";
import { TournamentHeaderCard } from "@/presentation/tournamentsView/tournamentsInfo/TournamentHeaderCard";
import { TournamentMenu } from "@/presentation/tournamentsView/tournamentsInfo/TournamentMenu";
import { TournamentTeamsLayout } from "@/presentation/tournamentsView/tournamentsInfo/tournamentsTeamsLayout/TournamentTeamsLayout";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TournamentDetails = () => {
  const { id } = useLocalSearchParams();
  const { top } = useSafeAreaInsets();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("summary");

  const menuItems = [
    { key: "summary", label: "Resumen", icon: "folder-open-outline" as IconName },
    { key: "teams", label: "Equipos", icon: "people-outline" as IconName },
    { key: "bracket", label: "Llaves", icon: "flag-outline" as IconName },
    { key: "info", label: "Info", icon: "information-circle-outline" as IconName },
  ];

  const [favorite, setFavorite] = useState<boolean>(false);

  const handleSaveFavorite = () => {
    setFavorite(!favorite);
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleChangeView = (view: string) => {
    setActiveTab(view);
  };

  const fakeTournaments = {
    id: 1,
    title: "Copa Elite",
    state: "in-progress" as const,
    dateText: "12 - 30 Diciembre 2024",
    buttonLabel: "Inscribirse",
    image: require("@/assets/images/imgT.jpg"),
  };

  return (
    <CustomFormView>
      <ScrollView>
        <View style={{ ...Flex.columnCenter, gap: 12, padding: 15 }}>
          <Pressable
            onPress={handleGoBack}
            style={[
              styles.back,
              {
                top: top - 30,
              },
            ]}>
            <WinnixIcon name={"chevron-back-outline"} size={30} color={Colors.light} />
          </Pressable>

          <Pressable
            onPress={handleSaveFavorite}
            style={[
              styles.like,
              {
                top: top - 30,
              },
            ]}>
            <WinnixIcon name={favorite ? "heart" : "heart-outline"} size={30} color={favorite ? Colors.primary : Colors.light} />
          </Pressable>

          <TournamentHeaderCard
            key={fakeTournaments.id}
            title={fakeTournaments.title}
            state={fakeTournaments.state}
            dateText={fakeTournaments.dateText}
            buttonLabel='Inscribirse'
            image={fakeTournaments.image}
            onPressButton={() => console.log("Inscripción!")}
            titleStyle={{ fontSize: 32 }}
          />

          <View style={{ marginVertical: 20, ...Flex.rowCenter, gap: 24 }}>
            <GradientCard
              iconName='people-outline'
              title='Equipos'
              value='32'
              colors={["rgba(30,62,166,0.9)", "rgba(77,33,133,0.9)"]}
              iconBackground={Colors.secondaryDark}
              borderColor={Colors.secondaryDark}
            />

            <GradientCard
              iconName='trophy-outline'
              title='Premio'
              value='100.000'
              colors={["rgba(234, 132, 10, .6)", "rgba(124, 43, 19, .8)"]}
              iconBackground='#00c897'
              titleStyle={{ color: "#00c897" }}
            />
          </View>

          <TournamentMenu activeKey={activeTab} onSelect={(key) => handleChangeView(key)} items={menuItems} />

          {/* Section View Summary */}
          {activeTab === "summary" && <ResumeLayout />}

          {/* Section teams */}
          {activeTab === "teams" && <TournamentTeamsLayout />}

          {/* Section Bracket */}
          {activeTab === "bracket" && <BracketLayout />}
        </View>
      </ScrollView>
    </CustomFormView>
  );
};

export default TournamentDetails;

const styles = StyleSheet.create({
  like: {
    position: "absolute",
    right: 25,
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
