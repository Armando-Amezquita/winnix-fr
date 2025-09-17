import { WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Fonts, Radius } from "@/presentation/styles/global-styles";
import { CustomButton } from "@/presentation/theme/components/CustomButton";
import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const FeaturedNews = () => {
  const { width } = useWindowDimensions();
  const image1 = require("./ronaldo.jpg");
  const image2 = require("./trofeo.jpg");

  return (
    <ScrollView>
      <View style={[styles.featuredNews, { width }]}>
        {/* Featured News */}
        <View style={styles.featuredNews__title}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <WinnixIcon name={"newspaper-outline"} size={30} color={Colors.primary} />
            <Text style={{ color: Colors.light, fontSize: 18, textTransform: "uppercase", fontWeight: "bold" }}> Noticias destacadas</Text>
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

        <View style={styles.featuredNews__card}>
          {/* <Text >Futbol</Text> */}
          <Image source={image1} style={styles.featuredNews__picture} resizeMode='cover' />
          <View style={{ padding: 10, gap: 10 }}>
            <Text style={{ color: "white", fontSize: Fonts.normal }}>Portugal espera para saber quien sera su rival en la final Uefa Nations Liga</Text>
            <Text style={{ color: "white" }}>hace 2 horas</Text>
          </View>
        </View>

        {/* <View style={{ flexDirection: "row", gap: 10 }}> */}
        <View style={{ flexDirection: "row", width: "100%", gap: 20, marginTop: 20 }}>
          <View style={styles.featuredNews__card2}>
            <Image source={image1} style={styles.featuredNews__picture2} resizeMode='cover' />

            <View style={{ padding: 10, gap: 5 }}>
              <Text style={styles.featuredNews__card2__title}>Ronaldo...</Text>
              <Text style={styles.featuredNews__card2__description}>Portugal espera para saber quien sera su rival en la final Uefa Nations Liga...</Text>
            </View>
          </View>

          <View style={styles.featuredNews__card2}>
            <Image source={image2} style={styles.featuredNews__picture2} resizeMode='cover' />

            <View style={{ padding: 10, gap: 10 }}>
              <Text style={styles.featuredNews__card2__description}>Portugal espera para saber quien sera su rival en la final Uefa Nations Liga...</Text>
              {/* <Text style={{ color: "white" }}>hace 2 horas</Text> */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  featuredNews__card: {
    gap: 10,
    position: "relative",
    width: "100%",
    // shadowColor: Colors.light,
    // shadowColor: Colors.primary,
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
  featuredNews__card2: {
    flex: 1,
    maxHeight: 300,
    width: "100%",
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
  featuredNews__picture: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: Radius.normal,
    borderTopRightRadius: Radius.normal,
  },
  featuredNews__picture2: {
    height: 180,
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
});
