import { useOurTournaments } from "@/presentation/hooks/tournamentStack/ourTournament/useOurTournaments";
import { Colors, Fonts, Radius } from "@/presentation/styles/global-styles";
import { CustomFormView } from "@/presentation/theme/components/CustomFormView";
import { CustomInput } from "@/presentation/theme/components/CustomInput";
import { AppModal } from "@/presentation/theme/components/CustomModal";
import { CustomText } from "@/presentation/theme/components/CustomText";
// import { CustomSearch } from "@/presentation/theme/components/CustomSearch";
import { useTranslation } from "@/i18n/hooks/useTranslation";
import { WinnixIcon } from "@/presentation/plugins/Icon";
import { MainContainerView } from "@/presentation/theme/components/MainContainerView";
import OurTournamentsList from "@/presentation/tournamentsView/ourTournaments/OurTournamentsList";
import TeamsList from "@/presentation/tournamentsView/TeamsList";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const OurTournaments = () => {
  const { height } = Dimensions.get("window");
  const { t } = useTranslation("tournaments");

  const {
    //Props
    viewSelected,
    modalVisible,
    ourTournaments,

    //Methods
    control,
    handdleChangeView,
    openModal,
  } = useOurTournaments();

  useEffect(() => {
    console.log("ourTournaments in index:>> ", ourTournaments);
  }, [ourTournaments]);

  return (
    <MainContainerView>
      <Pressable
        style={{
          position: "absolute",
          bottom: 80,
          zIndex: 1,
          right: 20,
          backgroundColor: Colors.primary,
          height: 60,
          width: 60,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          borderColor: Colors.light,
          borderWidth: 1,
        }}
        onPress={openModal}>
        <WinnixIcon name='add-outline' size={35} />
      </Pressable>

      <View style={styles.tournaments}>
        {/* <CustomSearch name='search' control={control} placeholder='Escribe aquí...' iconLeft='search' /> */}

        <View style={styles.tournamentsTagsContainer}>
          <Pressable
            onPress={() => handdleChangeView("published")}
            style={[
              styles.tournamentsTags,
              {
                backgroundColor: viewSelected === "published" ? "#2563EB" : Colors.dark,
              },
            ]}>
            <Ionicons name='trophy-outline' size={22} color={Colors.light} style={{ marginRight: 6 }} />
            <Text
              style={[
                styles.tournamentsTagsText,
                {
                  color: viewSelected === "published" ? Colors.light : Colors.gray,
                },
              ]}>
              {t("ourTournaments.active")}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => handdleChangeView("draft")}
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
              {t("ourTournaments.finished")}
            </Text>
          </Pressable>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AppModal
            showIcon
            visible={modalVisible}
            onClose={openModal}
            animationIn={"fadeIn"}
            modalStyle={{ borderRadius: Radius.extraBig }}
            iconColor={Colors.primary}
            contentStyle={{ borderRadius: Radius.extraBig, paddingHorizontal: 16, paddingVertical: 24, backgroundColor: Colors.blueDark }}>
            <ScrollView style={{ maxHeight: height * 0.6, minWidth: "100%" }}>
              <CustomFormView contentStyle={{ backgroundColor: Colors.blueDark }}>
                <View style={{ gap: 16 }}>
                  <CustomText
                    label={t("ourTournaments.createTournament")}
                    size={24}
                    weight={"bold"}
                    style={{ padding: 1, textAlign: "left", marginBottom: 12, color: Colors.primary }}
                  />

                  <CustomInput
                    name='tournamentName'
                    control={control}
                    placeholder={t("ourTournaments.tournamentNamePlaceholder")}
                    label={t("ourTournaments.tournamentName")}
                    iconRight='trophy-outline'
                    keyboardType='default'
                    //   errorMessage={errors.email?.message}
                  />
                </View>
              </CustomFormView>
            </ScrollView>
          </AppModal>
        </View>

        <View>{viewSelected === "published" ? <OurTournamentsList tournaments={ourTournaments} /> : <TeamsList />}</View>
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
