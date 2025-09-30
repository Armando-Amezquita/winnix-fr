import { IconName, WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Flex, Fonts, Radius } from "@/presentation/styles/global-styles";
import { useState } from "react";
import { Image, ImageSourcePropType, Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { CustomButton } from "../theme/components/CustomButton";
import { InfoCard } from "./InfoCard";

interface Props {
  label: string;
  img?: ImageSourcePropType | string;
  state: string;
  stats: {
    _id: string;
    iconName: IconName;
    title: string;
    value: string;
    iconColor?: string;
  }[];
  onPressCard: () => void;
  onPressFavorite?: () => void;
  stylePressable?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

export const TournamentTeamItem = ({ label, onPressCard, onPressFavorite, styleText, img, state, stats }: Props) => {
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleSaveFavorite = () => {
    setFavorite(!favorite);
    onPressFavorite && onPressFavorite();
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.details]}>
        <Image source={typeof img === "string" ? { uri: img } : img || require("../../assets/icons/tournament.png")} style={{ width: 100, height: 80 }} />

        {/* Botón de favoritos */}
        <Pressable onPress={handleSaveFavorite} style={styles.favorites}>
          <WinnixIcon name={favorite ? "heart" : "heart-outline"} size={30} color={favorite ? Colors.primary : Colors.gray} />
        </Pressable>

        <View>
          <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.label, styleText]}>
            {label}
          </Text>
          <Text
            style={[
              styles.state,
              {
                backgroundColor: state === "in-progress" ? Colors.primaryDark2 : Colors.secondary,
                color: state === "in-progress" ? Colors.primary : Colors.secondaryLigth,
              },
            ]}>
            {state}
          </Text>
        </View>
      </View>

      <View style={styles.tournamentTeamItem__CardContainer}>
        {stats.map((stat) => (
          <InfoCard key={stat._id} iconName={stat.iconName} title={stat.title} value={stat.value} iconColor={stat.iconColor} />
        ))}
      </View>

      <CustomButton label='Ver mas' onPress={onPressCard} stylePressable={styles.tournamentTeamItem__CardAction} styleText={styles.tournamentTeamItem__CardActionText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: 100,
    padding: 10,
    borderRadius: Radius.medium,
    borderWidth: 2,
    backgroundColor: Colors.dark,
    borderColor: Colors.secondary,
    shadowColor: Colors.secondary,
  },

  details: {
    position: "relative",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    minHeight: 100,
    padding: 10,
    width: "100%",
  },

  label: {
    fontSize: Fonts.normal,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "white",
    width: 200,
  },
  favorites: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 2,
  },

  state: {
    textAlign: "center",
    width: 100,
    padding: 4,
    paddingVertical: 8,
    borderRadius: 16,
    marginVertical: 4,
  },

  tournamentTeamItem__CardContainer: {
    ...Flex.rowCenter,
    gap: 12,
  },

  tournamentTeamItem__CardAction: {
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondaryLigth,
    borderWidth: 1,
    width: "93%",
    marginVertical: 16,
    marginHorizontal: "auto",
  },

  tournamentTeamItem__CardActionText: {
    color: Colors.light,
  },
});
