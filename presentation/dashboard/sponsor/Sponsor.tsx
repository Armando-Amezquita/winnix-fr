import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

import { WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Fonts, Radius } from "@/presentation/styles/global-styles";
import { CustomButton } from "@/presentation/theme/components/CustomButton";

export const Sponsors = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.featuredNews, { width }]}>
      <View style={styles.featuredNews__title}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <WinnixIcon name={"game-controller-outline"} size={30} color={Colors.primary} />
          <Text style={{ color: Colors.light, fontSize: 18, textTransform: "uppercase", fontWeight: "bold" }}> patrocinadores oficiales </Text>
        </View>
        <CustomButton
          label=''
          onPress={() => {}}
          stylePressable={{ width: 40, padding: 6, minHeight: 30, borderRadius: Radius.small }}
          styleText={{ fontSize: 15 }}
          icon='chevron-forward-outline'
          styleIcon={{ marginHorizontal: 0 }}
        />
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.featuredNews__card2}>
          <WinnixIcon name={"shirt-outline"} size={60} color={Colors.primary} />
        </View>
        <View style={styles.featuredNews__card2}>
          <WinnixIcon name={"shield-half-outline"} size={60} color={Colors.primary} />
        </View>
        <View style={styles.featuredNews__card2}>
          <WinnixIcon name={"shield-outline"} size={60} color={Colors.primary} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 20,
    columnGap: 20,
  },
  featuredNews: {
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  featuredNews__title: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  featuredNews__card2: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: "29%",
    shadowColor: "#003366",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: Radius.normal,
    backgroundColor: "#003366",
    borderColor: "#003366",
    borderWidth: 1.5,
  },
  featuredNews__picture2: {
    height: 100,
    width: "100%",
    borderTopLeftRadius: Radius.normal,
    borderTopRightRadius: Radius.normal,
  },

  featuredNews__card2__title: {
    color: "white",
    fontWeight: "bold",
  },
  featuredNews__card2__description: {
    color: "white",
    fontSize: Fonts.small,
  },
  nextEvent__item: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: Colors.primary,
    color: Colors.secondary,
    fontWeight: "bold",
    padding: 4,
    borderRadius: Radius.medium,
    right: 3,
    top: 10,
  },
});
