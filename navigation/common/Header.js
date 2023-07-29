import React from 'react'
import { AntDesign } from "@expo/vector-icons"; 
import { View, Pressable, Text } from "react-native";
import styles from '../../styles';

const Header = ({handleBack, handleSave, createExcercise}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerBackSection}>
        <Pressable onPress={handleBack} style={styles.backButton}>
          <AntDesign name="back" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.headerSaveSection}>
        <Pressable>
          <AntDesign
            style={{ marginRight: 10 }}
            onPress={createExcercise}
            name="pluscircleo"
            size={24}
            color="black"
          />
        </Pressable>
        <Pressable onPress={handleSave}>
          <AntDesign name="save" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

export default Header