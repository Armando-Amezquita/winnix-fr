import { WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Flex, Radius } from "@/presentation/styles/global-styles";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  onPressButton: () => void;
};

export const ParticipationCard = ({ onPressButton }: Props) => {
  return (
    <Pressable onPress={onPressButton} style={styles.participationCard__container}>
      <View style={styles.header}>
        <WinnixIcon name='person-circle-outline' size={30} color={Colors.primary} />
        <Text style={styles.headerText}>Mi participación</Text>
      </View>

      <View style={styles.content}>
        <WinnixIcon name='person-add-outline' size={50} color={Colors.primary} />
        <Text style={styles.title}>¡Únete al torneo!</Text>
        <Text style={styles.subtitle}>Las inscripciones están abiertas</Text>

        <Text style={styles.button}>Inscribirse ahora</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  participationCard__container: {
    backgroundColor: Colors.greenDark,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: Radius.medium,
    marginVertical: 20,
    padding: 14,
    width: "100%",
  },
  header: {
    ...Flex.rowCenter,
    gap: 10,
    alignSelf: "flex-start",
    marginBottom: 36,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light,
  },
  content: {
    ...Flex.columnCenter,
    gap: 12,
  },
  title: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    color: Colors.light,
    fontSize: 16,
  },
  button: {
    fontSize: 24,
    color: Colors.yellow,
    borderWidth: 1,
    borderColor: Colors.yellow,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: Radius.medium,
  },
});
