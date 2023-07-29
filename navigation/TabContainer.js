import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles";
import Schedule from "./screens/Schedule";
import Progress from "./screens/Progress";

const Tab = createBottomTabNavigator();
const scheduleName = "Schedule";
const progressName = "Progress";

const TabContainer = ({ navToWorkout, navToCreatedSchedules }) => {
  return (
    <Tab.Navigator
      initialRouteName={scheduleName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === scheduleName) {
            iconName = focused ? "barbell" : "barbell-outline";
          } else if (rn === progressName) {
            iconName = focused ? "bar-chart" : "bar-chart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerRight: () =>
          route.name === scheduleName ? (
            <View style={styles.scheduleHeaderButtons}>
              <TouchableOpacity onPress={() => navToCreatedSchedules()}>
                <Ionicons
                  name="clipboard-outline"
                  size={25}
                  color="black"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navToWorkout()}>
                <Ionicons
                  name="add-circle-outline"
                  size={25}
                  color="#000"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            </View>
          ) : null,
      })}
    >
      <Tab.Screen name={scheduleName} component={Schedule} />
      <Tab.Screen name={progressName} component={Progress} />
    </Tab.Navigator>
  );
};

export default TabContainer;
