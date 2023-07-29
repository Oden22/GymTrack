import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, KeyboardAvoidingView } from "react-native";
import styles from "../../styles";
import ExerciseListItem from "./ExerciseListItem";
import ExerciseChoosenList from "./ExerciseChoosenList";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { cloneDeep } from "lodash";
import exerciseData from "../data/exercise_data.json"

const DayDetail = ({
  dayNumber,
  setExercises,
  exercises,
  exerciseData
}) => {
  const [search, setSearch] = useState("");


  const filterExercises = () => {
    if (search.trim() === "") {
      return []; // Return empty array if search term is empty
    }

    const searchTerm = search.toLowerCase();
    return exerciseData.filter((exercise) => {
      const exerciseName = exercise.Name.toLowerCase();
      return exerciseName.includes(searchTerm);
    });
  };

  const addExercise = (item) => {
    item.dayNumber = dayNumber;
    const updatedExercises = cloneDeep(exercises);
    updatedExercises[dayNumber].push(item);
    console.log(updatedExercises);
    setExercises(updatedExercises);
    setSearch("");
  };

  const addReps = (index, reps) => {
    const updatedExercises = cloneDeep(exercises);
    updatedExercises[dayNumber][index].reps = reps;
    setExercises(updatedExercises);
  };

  const addSets = (index, sets) => {
    const updatedExercises = cloneDeep(exercises);
    updatedExercises[dayNumber][index].sets = sets;
    setExercises(updatedExercises);
  };

  const deleteExercise = (index) => {
    const updatedExercises = cloneDeep(exercises);
    updatedExercises[dayNumber].splice(index, 1);
    setExercises(updatedExercises);
  };

  const renderExerciseSearch = ({ item }) => (
    <ExerciseListItem item={item} onPress={() => addExercise(item)} />
  );

  const renderExerciseChoosen = ({ item, index }) => (
    <ExerciseChoosenList
      item={item}
      index={index}
      onRepChange={addReps}
      onSetChange={addSets}
      deleteExcercise={deleteExercise}
    />
  );

  return (
    <View style={styles.daySection}>
      <Text style={styles.title}>Day {dayNumber}</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Exercise"
        onChangeText={setSearch}
        value={search}
      />

      <Text style={styles.label}>Selected Exercises</Text>
      <FlatList
        style={styles.selectedExcercises}
        data={exercises[dayNumber]}
        renderItem={renderExerciseChoosen}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Render the filtered exercise results */}
      {search !== "" && (
        <View style={StyleSheet.absoluteFill}>
          <FlatList
            data={filterExercises()}
            renderItem={renderExerciseSearch}
            keyExtractor={(item) => item.id.toString()}
            style={styles.searchBarFlatList}
          />
        </View>
      )}
    </View>
  );
};

export default DayDetail;
