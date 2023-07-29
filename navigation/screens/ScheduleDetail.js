import React from 'react'
import styles from '../../styles';
import { View, Text } from "react-native";

const ScheduleDetail = ({ route }) => {
    const schedule = route.params
    console.log(schedule.selectedDays);
  return (
    <View style={styles.listItem}>
      <Text>{schedule.id}</Text>
    </View>
  );
}

export default ScheduleDetail