import { WinnixIcon } from "@/presentation/plugins/Icon";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, ImageSourcePropType, Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import { Colors, Fonts, Radius } from "../styles/global-styles";

interface Props {
  icon?: keyof typeof Ionicons.glyphMap;
  label: string;
  img?: ImageSourcePropType | string;
  onPressCard: () => void;
  onPressFavorite?: () => void;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
  stylePressable?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

export const TournamentTeamItem = ({ label, onPressCard, onPressFavorite, stylePressable, styleText, img }: Props) => {
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleSaveFavorite = () => {
    setFavorite(!favorite);
    onPressFavorite && onPressFavorite();
  };

  return (
    <Pressable onPress={onPressCard} style={[styles.container]}>
      <Image source={typeof img === "string" ? { uri: img } : img || require("../../assets/icons/tournament.png")} style={{ width: 150, height: 100 }} />

      {/* Botón de favoritos */}
      <Pressable onPress={handleSaveFavorite} style={styles.favorites}>
        <WinnixIcon name={favorite ? "heart" : "heart-outline"} size={30} color={favorite ? Colors.primary : Colors.gray} />
      </Pressable>

      <WinnixIcon style={styles.details} name={"chevron-forward-outline"} size={30} color={Colors.gray} />

      <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.label, styleText]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    minHeight: 100,
    padding: 10,
    borderRadius: Radius.extraBig,
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: Colors.dark,
  },

  label: {
    fontSize: Fonts.large,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "white",
    width: 150,
  },
  favorites: {
    position: "absolute",
    top: 10,
    right: 15,
    zIndex: 2,
  },

  details: {
    position: "absolute",
    bottom: 15,
    right: 15,
  },
});
