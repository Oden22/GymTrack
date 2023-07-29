import React, { useState } from "react";
import { View, Text } from "react-native";
import AsyncHandler from "../data/AsyncHandler";
import ScheduleListItem from "../common/ScheduleListItem";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const CreatedSchedules = () => {
  const [schedules, setSchedules] = useState([]);

  const handler = new AsyncHandler();
  const navigator = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      loadSchedules();
    }, [])
  );

  const navToScheduleDetail = (schedule) => {
    console.log(schedule);
    navigator.navigate("ScheduleDetail", schedule);
  };

  const loadSchedules = async () => {
    console.log("loading Schedules");
    const newSchedules = await handler.loadSchedulesFromStorage();
    setSchedules(newSchedules);
  };

  return (
    <View>
      {schedules.map((schedule) => (
        <ScheduleListItem
          key={schedule.id}
          schedule={schedule}
          onPress={() => navToScheduleDetail(schedule)}
        />
      ))}
    </View>
  );
};

export default CreatedSchedules;
