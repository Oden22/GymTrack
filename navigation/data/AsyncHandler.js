import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";
import exerciseData from "../data/exercise_data.json";

class AsyncHandler {
  constructor() {
    this.SCHEDULES_KEY = "app_workout_schedules";
    this.EXERCISE_DATA_KEY = "app_exercise_data";
  }

  // Check if exercise data has been saved before, and if not, save it to storage
  checkAndSaveExerciseData = async () => {
    try {
      const isExerciseDataSaved = await AsyncStorage.getItem(
        this.EXERCISE_DATA_KEY
      );
      if (!isExerciseDataSaved) {
        await this.saveExerciseData(exerciseData);
      }
    } catch (error) {
      console.error("Error checking and saving exercise data:", error);
    }
  };

  // Load schedules from AsyncStorage
  loadSchedulesFromStorage = async () => {
    try {
      const jsonSchedules = await AsyncStorage.getItem(this.SCHEDULES_KEY);
      if (jsonSchedules !== null) {
        return JSON.parse(jsonSchedules);
      }
      return [];
    } catch (error) {
      console.error("Error retrieving workout schedules:", error);
      return [];
    }
  };

  // Save schedules to AsyncStorage
  saveSchedules = async (schedules) => {
    try {
      const jsonSchedules = JSON.stringify(schedules);
      await AsyncStorage.setItem(this.SCHEDULES_KEY, jsonSchedules);
      console.log("Saving Schedule");
    } catch (error) {
      console.error("Error saving workout schedules:", error);
    }
  };

  // Create a new schedule object
  createNewSchedule = (weeks, days, active) => {
    const newSchedule = {
      id: uuidv4(),
      active: active,
      numberOfWeeks: parseInt(weeks),
      daysPerWeek: parseInt(days),
      selectedDays: [],
    };
    return newSchedule;
  };

  // Delete all schedules from AsyncStorage
  deleteAllSchedules = async () => {
    try {
      await AsyncStorage.removeItem(this.SCHEDULES_KEY);
      console.log("Deleted all schedules");
    } catch (error) {
      console.error("Error deleting workout schedules:", error);
    }
  };

  // Set a schedule as active
  setActiveSchedule = async (id) => {
    try {
      // Load schedules from AsyncStorage
      const schedules = await this.loadSchedulesFromStorage();

      // Find the schedule with the given id
      const activeScheduleIndex = schedules.findIndex(
        (schedule) => schedule.id === id
      );

      // If the schedule with the given id is found, update its active status and others as inactive
      if (activeScheduleIndex !== -1) {
        schedules.forEach((schedule, index) => {
          schedule.active = index === activeScheduleIndex;
        });

        // Save the updated schedules to AsyncStorage
        await this.saveSchedules(schedules);
        console.log("Set schedule as active:", id);
      } else {
        console.error("Schedule with the given id not found:", id);
      }
    } catch (error) {
      console.error("Error setting active schedule:", error);
    }
  };

  // Save exercise data to AsyncStorage
  saveExerciseData = async (data) => {
    try {
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(this.EXERCISE_DATA_KEY, jsonData);
      console.log("Exercise data saved to storage.");
    } catch (error) {
      console.error("Error saving exercise data:", error);
    }
  };

  // Load exercise data from AsyncStorage
  loadExerciseData = async () => {
    try {
      const jsonExerciseData = await AsyncStorage.getItem(
        this.EXERCISE_DATA_KEY
      );
      if (jsonExerciseData !== null) {
        return JSON.parse(jsonExerciseData);
      }
      return [];
    } catch (error) {
      console.error("Error retrieving exercise data:", error);
      return [];
    }
  };
}

export default AsyncHandler;
