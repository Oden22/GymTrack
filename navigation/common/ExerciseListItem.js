import React from 'react'
import { View, Text } from "react-native";
import styles from '../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ExerciseListItem = ({ item, onPress }) => {
    return (
      <View style={styles.listItemContainer}>
        <TouchableOpacity onPress={onPress}>
          <View key={item.id} style={styles.listItemText}>
            <Text style={styles.listTextMain}>{item.Name}</Text>
            <Text style={styles.listSubText}>{item.Equipment}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
}

export default ExerciseListItem;