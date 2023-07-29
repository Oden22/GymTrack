import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AppStack from "./navigation/AppStack";

const App = () => {

  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
};

export default App;
