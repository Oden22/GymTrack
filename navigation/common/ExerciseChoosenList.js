import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import styles from "../../styles";
import { AntDesign } from "@expo/vector-icons";

const ExerciseChoosenList = ({
  item,
  index,
  onRepChange,
  onSetChange,
  deleteExcercise,
}) => {
  const [reps, setReps] = useState(item.reps ? item.reps.toString() : "");
  const [sets, setSets] = useState(item.sets ? item.sets.toString() : "");

  const handleRepChange = (text) => {
    setReps(text);
    onRepChange(index, parseInt(text, 10)); // Parse the input to an integer and send to the parent component
  };

  const handleSetChange = (text) => {
    setSets(text);
    onSetChange(index, parseInt(text, 10));
  };

  const handleDeleteExcercise = () => {
    deleteExcercise(index)
  }

  return (
    <View style={styles.listItemContainer}>
      <View key={item.id} style={styles.listItemText}>
        <Text style={styles.listTextMain}>{item.Name}</Text>
        <Text style={styles.listSubText}>
          {item.Equipment} - {item.Target}
        </Text>
        <View style={styles.listItemReps}>
          <TextInput
            style={styles.repInput}
            keyboardType="numeric"
            onChangeText={handleRepChange}
            value={reps}
            placeholder="Reps"
          />
          <TextInput
            style={styles.repInput}
            keyboardType="numeric"
            onChangeText={handleSetChange}
            value={sets}
            placeholder="Sets"
          />
        </View>
      </View>
      <View style={styles.deleteButtonSectionList}>
        <Pressable onPress={handleDeleteExcercise}>
          <AntDesign name="delete" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default ExerciseChoosenList;
