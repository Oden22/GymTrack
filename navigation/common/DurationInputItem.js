import React from 'react'
import { Text, TextInput } from "react-native";

const DurationInputItem = ({ labelStyle, textStyle, label, val, onchange, type }) => {
  return (
    <>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        keyboardType={type}
        value={val}
        onChangeText={onchange}
        style={textStyle}
      />
    </>
  );
};

export default DurationInputItem;