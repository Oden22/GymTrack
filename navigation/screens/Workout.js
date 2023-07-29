import React from 'react'
import { View, Text } from 'react-native'
const Workout = ({ route }) => {
  console.log(route.params)
  return (
    <View>
          <Text>WorkoutScreen</Text>
    </View>
  )
}

export default Workout