import React, { useState } from "react";
import { View, Text, Pressable, FlatList, ScrollView } from "react-native";
import AsyncHandler from "../data/AsyncHandler";
import ScheduleListItem from "../common/ScheduleListItem";
import { useFocusEffect } from "@react-navigation/native";
import styles from "../../styles";
import DayListItem from "../common/DayListItem";
import NumberSelector from "../common/NumberSelector";
import { AntDesign } from "@expo/vector-icons";

const Schedule = () => {
  const [activeSchedule, setActiveSchedule] = useState(null);
  const [showSelectedDays, setShowSelectedDays] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentDay, setCurrentDay] = useState(1);

  const handler = new AsyncHandler();

  useFocusEffect(
    React.useCallback(() => {
      loadSchedules();
    }, [])
  );

  const loadSchedules = async () => {
    const allSchedules = await handler.loadSchedulesFromStorage();

    // Select the schedule with active field set to true
    const activeSchedule = allSchedules.find(
      (schedule) => schedule.active === true
    );
    setActiveSchedule(activeSchedule);
  };

  const renderDays = () => {
    if (activeSchedule.selectedDays[currentDay].length >= 1) {
      return activeSchedule.selectedDays[currentDay].map((excercise, index) => (
        <DayListItem key={index} dayNumber={index} excercise={excercise} />
      ));
    }
    return <Text>No Exercises</Text>;
  };

  const handleIncWeek = () => {
    if (currentWeek + 1 <= activeSchedule.numberOfWeeks) {
      setCurrentWeek(currentWeek+1);
    }
  }

  const handleDecWeek = () => {
    if (currentWeek - 1 >= 1) {
      setCurrentWeek(currentWeek - 1);
    }
  }

  const handleIncDay = () => {
    if (currentDay + 1 <= activeSchedule.daysPerWeek) {
      setCurrentDay(currentDay + 1);
    }
  };

  const handleDecDay = () => {
    if (currentDay - 1 >= 1) {
      setCurrentDay(currentDay - 1);
    }
  };
  return (
    <View style={styles.scheduleContainer}>
      {activeSchedule ? (
        <View style={styles.scheduleActiveContainer}>
          <NumberSelector
            preText={"Week"}
            numberToIncrement={currentWeek}
            onPressInc={handleIncWeek}
            onPressDec={handleDecWeek}
          />
          <NumberSelector
            preText={"Day"}
            numberToIncrement={currentDay}
            onPressInc={handleIncDay}
            onPressDec={handleDecDay}
          />
          <View style={styles.workoutDaysContainer}>
            <FlatList
              data={renderDays()}
              renderItem={({ item }) => item}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={<Text>No Exercises</Text>}
              contentContainerStyle={styles.workoutDaysFlatList}
            />
          </View>
          <Pressable style={styles.playButton}>
            <AntDesign name="playcircleo" size={100} color="#ECA400" />
          </Pressable>
        </View>
      ) : (
        <Text>No Selected Schedules</Text>
      )}
    </View>
  );
};

export default Schedule;
