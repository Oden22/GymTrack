import {
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "black",
  },
  durationInput: {
    height: 40,
    width: "15%",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",

    borderColor: "#ccc",
    marginBottom: 10,
    paddingHorizontal: 10,
    textDecorationLine: "underline",
  },
  searchBar: {
    height: 40,
    width: "100%",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#0A89FF",
    borderRadius: 8,
    marginBottom: 5,
    paddingHorizontal: 10,
    textDecorationLine: "underline",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#06dbdb",
  },
  dayOptions: {
    flexDirection: "row",
    marginTop: 20,
  },

  daySection: {
    flex: 1,
    alignContent: "center",
    margin: 5,
  },

  dayButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    paddingHorizontal: 16,
    margin: 5,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  dayButtonSelected: {
    backgroundColor: "#007BFF",
    borderColor: "#007BFF",
  },
  listItemText: {
    flexDirection: "column",
    width: "95%",
  },
  listItemContainer: {
    flexDirection: "row",
    marginBottom: 5,
    borderColor: "#10547E",
    borderBottomWidth: 2,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    padding: 10,
    alignItems: "flex-start",
    margin: 5,
  },
  listTextMain: {
    fontSize: 18,
  },
  listTextMainDay: {
    fontSize: 18,
    color: "#F3DFC1",
  },
  listSubText: {
    fontSize: 12,
    color: "gray",
  },
  listSubTextDay: {
    fontSize: 12,
    color: "gray",
  },
  searchBarFlatList: {
    position: "absolute",
    top: 105, // Adjust this value to leave space for the search bar
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 8,
  },

  saveText: {
    color: "white",
    fontSize: 22,
  },

  backAndSaveSection: {
    flexDirection: "row",
    width: "100%",
  },
  daysPerWeekButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  weekDayButton: {
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "48%", // Adjust the width to create space for two buttons in a column
    alignItems: "center",
  },
  weekDaySelectedButton: {
    backgroundColor: "#0A89FF",
    borderColor: "#0A89FF",
  },
  weekDayButtonText: {
    fontSize: 24,
  },
  weekDaySelectedText: {
    color: "white",
  },
  boldText: {
    fontWeight: "bold",
  },
  progressButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 8,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#4AAD52",
    margin: 5,
    width: 200,
  },
  progressText: {
    color: "white",
    fontSize: 24,
  },
  progressButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    marginTop: 5,
  },
  headerSaveSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "flex-end",
    width: "50%",
  },
  headerBackSection: {
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
    width: "50%",
  },
  backButton: {},
  saveButton: {
    backgroundColor: "#007BFF",
  },
  selectedExcercises: {
    borderWidth: 2,
    borderColor: "#0A89FF",
    borderRadius: 8,
    marginBottom: 5,
    paddingHorizontal: 10,
    textDecorationLine: "underline",
    flexDirection: "column",
  },
  repInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    fontSize: 16,
    marginRight: 5,
    marginTop: 5,
  },
  listItemReps: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButtonSectionList: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  scheduleHeaderButtons: {
    flexDirection: "row",
  },
  checkboxContainer: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  scheduleGraph: {
    height: "50%",
    backgroundColor: "black",
  },
  numberSelectorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  selectorText: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 32,
    color: "#F3DFC1",
  },
  selectorButton: {},
  scheduleActiveContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  workoutDaysContainer: {
    borderColor: "#ECA400",
    borderRadius: 30,
    margin: 10,
    borderWidth: 2,
    height: 400,
    padding: 5,
  },
  workoutDaysFlatList: {
    flexGrow: 1, // This will make the FlatList take up all available space within its parent container
  },
  scheduleContainer: {
    backgroundColor: "#160F29",
    flex: 1,
  },
  playButton: {
    margin: 10
  }
});

export default styles