import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../../styles";

const DaysPerWeekSelection = ({
  workoutDays,
  setWorkoutDays,
  handleDaysPerWeekSelected,
}) => {
  const handleButtonPress = (daysPerWeek) => {
    setWorkoutDays(daysPerWeek);
  };

  return (
    <View style={styles.daysPerWeekSelection}>
      <Text style={styles.title}>Training Days Per Week</Text>
      <View style={styles.daysPerWeekButtonContainer}>
        {[1, 2, 3, 4, 5, 6, 7].map((daysPerWeek, index) => (
          <Pressable
            key={daysPerWeek}
            onPress={() => handleButtonPress(daysPerWeek)}
            style={[
              styles.weekDayButton,
              workoutDays === daysPerWeek && styles.weekDaySelectedButton,
            ]}
          >
            <Text
              style={[
                styles.weekDayButtonText,
                workoutDays === daysPerWeek && styles.weekDaySelectedText,
              ]}
            >
              <Text style={styles.boldText}>{daysPerWeek}X</Text> per week
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.progressButtonContainer}>
        <Pressable
          style={[styles.progressButton]}
          onPress={handleDaysPerWeekSelected}
        >
          <Text style={styles.progressText}>Progress</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DaysPerWeekSelection;
