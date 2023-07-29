import React, { useState, useEffect } from "react";
import { View } from "react-native";
import DurationSection from "../common/DurationSection";
import styles from "../../styles";
import AsyncHandler from "../data/AsyncHandler";
import DaysSection from "../common/DaysSection";

const CreateSchedule = () => {
  const [weeks, setWeeks] = useState("");
  const [workoutDays, setWorkoutDays] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [currentSchedule, setCurrentSchedule] = useState();
  const [showDaysOfWeek, setShowDaysOfWeek] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const handler = new AsyncHandler();

  useEffect(() => {
    loadSchedules();
  }, []);

  const loadSchedules = async () => {
    const newSchedules = await handler.loadSchedulesFromStorage();
    console.log("Loading Schedules for new Schedule");
    setSchedules(newSchedules);
  };

  const handleProgress = () => {
    const newSchedule = handler.createNewSchedule(weeks, workoutDays, isActive);
    console.log("Created new Schedule " + JSON.stringify(newSchedule));
    setCurrentSchedule(newSchedule);
    //setSchedules([...schedules, newSchedule]);
    // Toggle the visibility of the options
    setShowDaysOfWeek(true);
  };

  const handleActive = () => {
    setIsActive(!isActive)
  }

  const handleBack = () => {
    // Toggle the visibility of the options
    setShowDaysOfWeek(false);
  };

  return (
    <View style={styles.container}>
      {!showDaysOfWeek ? (
        <DurationSection
          setWeeks={(text) => setWeeks(text)}
          setWorkoutDays={(text) => setWorkoutDays(text)}
          handleProgress={handleProgress}
          weeks={weeks}
          workoutDays={workoutDays}
          handleActive={handleActive}
          isActive={isActive}
        />
      ) : (
        <DaysSection
          workoutDays={workoutDays}
          handleBack={handleBack}
          currentSchedule={currentSchedule}
          schedules={schedules}
          setSchedules={setSchedules}
        />
      )}
    </View>
  );
};

export default CreateSchedule;
