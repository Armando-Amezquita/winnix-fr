import { IconName, WinnixIcon } from "@/presentation/plugins/Icon";
import { Colors, Flex, Radius } from "@/presentation/styles/global-styles";
import { CustomText } from "@/presentation/theme/components/CustomText";
import { GradientContainer } from "@/presentation/theme/components/GradientCard";
import React from "react";
import { StyleSheet, View } from "react-native";

const fakeTimelineData = [
  {
    icon: "person-add-outline",
    title: "Inscripciones",
    date: "1 - 10 Dic 2025",
    status: "En Curso",
    color: "#33B36B",
  },
  {
    icon: "flag-outline",
    title: "Clasificación",
    date: "15 - 18 Dic 2025",
  },
  {
    icon: "trophy-outline",
    title: "Cuartos de final",
    date: "23 - 26 Dic 2025",
  },
  {
    icon: "construct-outline",
    title: "Semifinal",
    date: "28 - 29 Dic 2025",
  },
  {
    icon: "medal-outline",
    title: "Gran Final",
    date: "30 Dic 2025",
  },
];

interface TimelineEventProps {
  icon: string;
  title: string;
  date: string;
  status?: string;
  color?: string;
}

const TimelineEventCard: React.FC<TimelineEventProps> = ({ icon, title, date, status, color }) => {
  const isActive = !!status;

  return (
    <View
      style={[
        styles.InfoTimeLine__EventCard,
        {
          borderColor: isActive ? color : Colors.dark,
          backgroundColor: isActive ? "transparent" : "rgba(12, 15, 46, 0.6)",
        },
      ]}>
      <View style={{ ...Flex.rowCenter, justifyContent: "flex-start" }}>
        <View style={[styles.InfoTimeLine__IconWrapper, { backgroundColor: isActive ? color : Colors.grayLight }]}>
          <WinnixIcon name={icon as IconName} size={30} color={Colors.light} />
        </View>

        <View style={styles.InfoTimeLine__EventText}>
          <CustomText label={title} size={18} weight='bold' color={Colors.light} />
          <CustomText label={date} color={Colors.light} />
        </View>
      </View>

      {status && <CustomText label={status} weight='bold' color={Colors.light} style={[styles.InfoTimeLine__StatusBadge, { backgroundColor: color }]} />}
    </View>
  );
};

export const InfoTimeLine = () => {
  return (
    <GradientContainer colors={["#166336", Colors.secondaryLigth]} borderColor='#9FE8BA'>
      <View style={styles.InfoTimeLine__Container}>
        {/* Header */}
        <View style={styles.InfoTimeLine__Header}>
          <WinnixIcon name='calendar-outline' size={30} color={Colors.primary} />
          <CustomText label='Cronograma del Torneo' size={20} weight='bold' />
        </View>

        {/* Timeline */}
        <View style={styles.InfoTimeLine__List}>
          {fakeTimelineData.map((event, index) => (
            <TimelineEventCard key={index} icon={event.icon} title={event.title} date={event.date} status={event.status} color={event.color} />
          ))}
        </View>
      </View>
    </GradientContainer>
  );
};

const styles = StyleSheet.create({
  InfoTimeLine__Container: {
    width: "100%",
  },
  InfoTimeLine__Header: {
    ...Flex.rowCenter,
    justifyContent: "flex-start",
    width: "100%",
    gap: 8,
  },
  InfoTimeLine__List: {
    marginTop: 24,
    gap: 12,
  },
  InfoTimeLine__EventCard: {
    ...Flex.rowCenter,
    justifyContent: "space-between",
    padding: 12,
    borderWidth: 1,
    borderRadius: Radius.medium,
    flex: 1,
  },
  InfoTimeLine__IconWrapper: {
    padding: 12,
    width: 60,
    height: 60,
    borderRadius: 100,
    ...Flex.columnCenter,
  },
  InfoTimeLine__EventText: {
    marginLeft: 12,
  },
  InfoTimeLine__StatusBadge: {
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: Radius.medium,
  },
});
