import React from 'react'
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import styles from '../../styles';
import { AntDesign } from "@expo/vector-icons"; 

const NumberSelector = ({preText, numberToIncrement, onPressInc, onPressDec}) => {
  return (
    <View style={styles.numberSelectorContainer}>
      <Pressable style={styles.selectorButton} onPress={onPressDec}>
        <AntDesign name="minuscircleo" size={32} color="#ECA400" />
      </Pressable>
      <Text style={styles.selectorText}>
        {preText} {numberToIncrement}
      </Text>
      <Pressable style={styles.selectorButton} onPress={onPressInc}>
        <AntDesign name="pluscircleo" size={32} color="#ECA400" />
      </Pressable>
    </View>
  );
}

export default NumberSelector