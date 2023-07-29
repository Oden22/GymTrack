import React, { useState, useRef } from "react";
import { View, Pressable, Text } from "react-native";
import DayDetail from "./DayDetail";
import { useNavigation } from "@react-navigation/native";
import AsyncHandler from "../data/AsyncHandler";
import { useEffect } from "react";
import Swiper from "react-native-swiper";
import Header from "./Header";
import { cloneDeep } from "lodash";
import NewExcercise from "../screens/NewExcercise"

const DaysSection = ({
  workoutDays,
  handleBack,
  currentSchedule,
  schedules,
  setSchedules,
  exerciseData
}) => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [exercises, setExercises] = useState({}); // Use an object to store exercises for each day
  const [showCreateExcercise, setShowCreateExcercise] = useState(false);

  const handler = new AsyncHandler();
  const navigator = useNavigation();

  useEffect(() => {
    // Initialize the exercises state with empty arrays for each day
    const initialExercises = {};
    for (let i = 1; i <= workoutDays; i++) {
      initialExercises[i] = cloneDeep([]);
    }
    setExercises(initialExercises);
  }, [workoutDays]);

  const handleBackDays = () => {
    setSelectedDay(1); // Always reset to Day 1 when going back
  };

  const createExcercise = () => {
    setShowCreateExcercise(!showCreateExcercise);
  };

  const saveSchedule = async () => {
    currentSchedule.selectedDays = exercises;
    if (currentSchedule.active) {
      schedules.forEach((schedule) => {
        schedule.active = false;
      });
    }
    setSchedules([...schedules, currentSchedule]);
    const toSave = [...schedules, currentSchedule];
    await handler.saveSchedules(toSave);
    navigator.navigate("Schedule");
  };

  const renderDays = () => {
    const days = [];

    for (let i = 0; i < workoutDays; i++) {
      days.push(
        <DayDetail
          key={i}
          handleBackDays={handleBackDays}
          dayNumber={i + 1}
          setExercises={setExercises}
          exercises={exercises} // Retrieve exercises for the selected day
          save={saveSchedule}
          exerciseData={exerciseData}
        />
      );
    }
    return days;
  };

  return (
    <>
      {!showCreateExcercise ? (
        <>
          <Header
            handleBack={handleBack}
            handleSave={saveSchedule}
            createExcercise={createExcercise}
          />
          <View style={{ flex: 1 }}>
            <Swiper horizontal loop={false} showsPagination={false}>
              {renderDays()}
            </Swiper>
          </View>
        </>
      ) : (
        <>
          <Header
            handleBack={createExcercise}
            handleSave={saveSchedule}
            createExcercise={createExcercise}
          />
          <NewExcercise />
        </>
      )}
    </>
  );
};

export default DaysSection;
