import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";

import { WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Fonts, Radius } from "@/presentation/styles/global-styles";
import { CustomButton } from "@/presentation/theme/components/CustomButton";

export const NextEvents = () => {
  const { width } = useWindowDimensions();
  const image1 = require("../ronaldo.jpg");
  const image2 = require("../trofeo.jpg");

  return (
    <View style={[styles.featuredNews, { width }]}>
      <View style={styles.featuredNews__title}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <WinnixIcon name={"trophy-outline"} size={30} color={Colors.primary} />
          <Text style={{ color: Colors.light, fontSize: 18, textTransform: "uppercase", fontWeight: "bold" }}> proximos campeonatos</Text>
        </View>
        <CustomButton
          label='Calendario'
          onPress={() => {}}
          stylePressable={{ width: 120, padding: 6, minHeight: 30, borderRadius: Radius.small }}
          styleText={{ fontSize: 15 }}
          icon='calendar-outline'
          styleIcon={{ marginHorizontal: 0 }}
        />
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.featuredNews__card2}>
          <Text style={styles.nextEvent__item}>12 Jun - 12 Jul, 2025</Text>
          <Image source={image1} style={styles.featuredNews__picture2} resizeMode='cover' />

          <View style={{ padding: 10, gap: 5 }}>
            <Text style={styles.featuredNews__card2__title}>Copa America 2025</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
              <WinnixIcon name={"location-outline"} size={25} color={Colors.primary} />
              <Text style={styles.featuredNews__card2__description}>Colombia</Text>
            </View>
          </View>
        </View>
        <View style={styles.featuredNews__card2}>
          <Text style={styles.nextEvent__item}>12 Jun - 12 Jul, 2025</Text>
          <Image source={image1} style={styles.featuredNews__picture2} resizeMode='cover' />

          <View style={{ padding: 10, gap: 5 }}>
            <Text style={styles.featuredNews__card2__title}>Copa America 2025</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
              <WinnixIcon name={"location-outline"} size={25} color={Colors.primary} />
              <Text style={styles.featuredNews__card2__description}>Colombia</Text>
            </View>
          </View>
        </View>
        <View style={styles.featuredNews__card2}>
          <Text style={styles.nextEvent__item}>12 Jun - 12 Jul, 2025</Text>
          <Image source={image1} style={styles.featuredNews__picture2} resizeMode='cover' />

          <View style={{ padding: 10, gap: 5 }}>
            <Text style={styles.featuredNews__card2__title}>Copa America 2025</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
              <WinnixIcon name={"location-outline"} size={25} color={Colors.primary} />
              <Text style={styles.featuredNews__card2__description}>Colombia</Text>
            </View>
          </View>
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
    maxHeight: 300,
    width: "47.5%",
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
