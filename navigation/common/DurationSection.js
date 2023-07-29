import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";
import DurationInputItem from "./DurationInputItem";
import DaysPerWeekSelection from "./DaysPerWeekSelection";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles";

const DurationSection = ({
  setWeeks,
  setWorkoutDays,
  handleProgress,
  weeks,
  workoutDays,
  handleActive,
  isActive
}) => {
  const [daySelection, setDaySelection] = useState(true);

  const handleDaysPerWeekSelected = () => {
    setDaySelection(false);
  };

  return (
    <>
      {daySelection ? (
        <DaysPerWeekSelection
          workoutDays={workoutDays}
          setWorkoutDays={setWorkoutDays}
          handleDaysPerWeekSelected={handleDaysPerWeekSelected}
        />
      ) : (
        <>
          <Text style={styles.label}>Set Active</Text>
          <View style={styles.checkboxContainer}>
            <Pressable onPress={handleActive} style={styles.checkbox}>
              {isActive ? (
                <Ionicons name="battery-charging" size={42} color="black" />
              ) : (
                <Ionicons name="battery-dead" size={42} color="black" />
              )}
            </Pressable>
          </View>

          <DurationInputItem
            labelStyle={styles.label}
            textStyle={styles.durationInput}
            label="Number of Weeks:"
            val={weeks}
            onchange={setWeeks}
            type="numeric"
          />

          <Pressable onPress={handleProgress} style={styles.button}>
            <Text>Progress</Text>
          </Pressable>
        </>
      )}
    </>
  );
};

export default DurationSection;
