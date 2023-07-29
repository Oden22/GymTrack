import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const ScheduleListItem = ({onPress, schedule}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.listItemContainer}>

      <View key={schedule.id} style={styles.listItemText}>
        <Text style={styles.listTextMain}>{schedule.id.slice(0, 4)}</Text>
        <Text style={styles.listSubText}>
          Duration: {schedule.numberOfWeeks} Weeks with {schedule.daysPerWeek}{" "}
          days per week
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ScheduleListItem;
