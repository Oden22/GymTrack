import { createStackNavigator } from "@react-navigation/stack";
import TabContainer from "./TabContainer";
import CreateSchedule from "./screens/CreateSchedule";
import ScheduleDetail from "./screens/ScheduleDetail";
import { useNavigation } from "@react-navigation/native";
import CreatedSchedules from "./screens/CreatedSchedules"
import NewExcercise from "./screens/NewExcercise";

const Stack = createStackNavigator();

const AppStack = () => {
  const navigation = useNavigation();

  const navigateToSchedule = () => {
    navigation.navigate("CreateSchedule", {
      screen: "CreateSchedule",
    });
  };
  
  const navToCreatedSchedules = () => {
    navigation.navigate("CreatedSchedules", {
      screen: "CreatedSchedules",
    });
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="tabContainer" options={{ headerShown: false }}>
        {(props) => (
          <TabContainer
            navToWorkout={navigateToSchedule}
            navToCreatedSchedules={navToCreatedSchedules}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="CreatedSchedules" component={CreatedSchedules} />
      <Stack.Screen name="NewExcercise" component={NewExcercise} />
      <Stack.Screen
        name="CreateSchedule"
        component={CreateSchedule}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScheduleDetail"
        component={ScheduleDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
