import { IconName, WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Flex, Radius } from "@/presentation/styles/global-styles";
import { CustomText } from "@/presentation/theme/components/CustomText";
import { GradientContainer } from "@/presentation/theme/components/GradientCard";
import React from "react";
import { StyleSheet, View } from "react-native";

const fakeContactData = [
  { id: 1, type: "Celular", icon: "call-outline", value: "322-788-99-99" },
  { id: 2, type: "WhatsApp", icon: "chatbubble-ellipses-outline", value: "300-555-88-11" },
  { id: 3, type: "Correo", icon: "mail-outline", value: "contacto@torneos.com" },
];

const ContactItem = ({ icon, type, value }: { icon: string; type: string; value: string }) => (
  <View style={styles.InfoContactCard__itemContainer}>
    <WinnixIcon name={icon as IconName} size={30} color={Colors.primary} />
    <CustomText label={`${type}:`} size={18} weight='bold' color={Colors.light} />
    <CustomText label={value} size={16} color={Colors.light} weight='bold' />
  </View>
);

export const InfoContactCard = () => {
  return (
    <GradientContainer colors={[Colors.dark, Colors.secondaryLigth]} borderColor={Colors.secondaryLigth}>
      <View style={styles.InfoContactCard__container}>
        {/* Header */}
        <View style={styles.InfoContactCard__header}>
          <WinnixIcon name='chatbox-ellipses-outline' size={30} color={Colors.secondaryLigth} />
          <CustomText label='Contacto y soporte' size={20} weight='bold' color={Colors.light} />
        </View>

        {/* Lista de contactos */}
        <View style={styles.InfoContactCard__list}>
          {fakeContactData.map((item) => (
            <ContactItem key={item.id} icon={item.icon} type={item.type} value={item.value} />
          ))}
        </View>
      </View>
    </GradientContainer>
  );
};

const styles = StyleSheet.create({
  InfoContactCard__container: {
    ...Flex.columnCenter,
    justifyContent: "flex-start",
    gap: 8,
    width: "100%",
  },
  InfoContactCard__header: {
    ...Flex.rowCenter,
    justifyContent: "flex-start",
    width: "100%",
    gap: 8,
  },
  InfoContactCard__list: {
    width: "100%",
    marginTop: 12,
    gap: 12,
  },
  InfoContactCard__itemContainer: {
    ...Flex.rowCenter,
    justifyContent: "flex-start",
    gap: 12,
    backgroundColor: "rgba(31, 106, 224, 0.5)",
    padding: 16,
    borderRadius: Radius.medium,
  },
});
