import React from 'react'
import { Text, Pressable } from "react-native";

const WorkoutDayButton = ({ buttonTitle, buttonStyle, onPress }) => {

  return (
    <Pressable onPress={onPress} style={buttonStyle}>
      <Text>{buttonTitle}</Text>
    </Pressable>
  );
}

export default WorkoutDayButton