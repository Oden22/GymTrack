import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import styles from "../../styles";
import { AntDesign } from "@expo/vector-icons";

const DayListItem = ({ dayNumber, excercise }) => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.listItemText}>
        <Text style={styles.listTextMainDay}>{excercise.Name}</Text>
        <Text style={styles.listSubTextDay}>
          {excercise.sets} Sets {excercise.reps} Reps
        </Text>
      </View>
    </View>
  );
};

export default DayListItem;