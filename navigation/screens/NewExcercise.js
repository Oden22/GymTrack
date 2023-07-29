import React, { useState } from "react";
import { View, Pressable, Text, TextInput, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncHandler from "../data/AsyncHandler";

const NewExcercise = ({handleBack}) => {
  const [exerciseName, setExerciseName] = useState("");
  const [bodypart, setBodypart] = useState("");
  const [equipment, setEquipment] = useState("");
  const [target, setTarget] = useState("");

  const asyncHandler = new AsyncHandler();

  const handleCreateExercise = async () => {
    const newExercise = {
      Name: exerciseName,
      Bodypart: bodypart,
      Equipment: equipment,
      Target: target,
    };

    try {
      // Get existing exercises from AsyncStorage
      const existingExercises = await asyncHandler.loadExerciseData();

      // Append the new exercise to the existing data
      const updatedExercises = [...existingExercises, newExercise];

      // Save the updated exercises back to AsyncStorage
      await asyncHandler.saveExerciseData(updatedExercises);

      // Reset the input fields after creating the exercise
      setExerciseName("");
      setBodypart("");
      setEquipment("");
      setTarget("");

      console.log("New Exercise:", newExercise);
      console.log("Updated Exercises:", updatedExercises);
    } catch (error) {
      console.error("Error saving exercise:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Exercise Name"
        value={exerciseName}
        onChangeText={setExerciseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Bodypart"
        value={bodypart}
        onChangeText={setBodypart}
      />
      <TextInput
        style={styles.input}
        placeholder="Equipment"
        value={equipment}
        onChangeText={setEquipment}
      />
      <TextInput
        style={styles.input}
        placeholder="Target"
        value={target}
        onChangeText={setTarget}
      />

      <Pressable style={styles.button} onPress={handleCreateExercise}>
        <Text style={styles.buttonText}>Create Exercise</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default NewExcercise;
