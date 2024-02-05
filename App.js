import React from "react";
import { HomeScreen, PatientScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#E9F5FF",
            },
            headerTitleStyle: {
              fontSize: 26,
              fontWeight: "bold",
            },
            headerTintColor: "#2A86FF",
          }}
        />
        <Stack.Screen
          name="Patient"
          component={PatientScreen}
          options={{
            title: "Patient page",
            headerStyle: {
              backgroundColor: "#E9F5FF",
            },
            headerTitleStyle: {
              fontSize: 26,
              fontWeight: "bold",
            },
            headerTintColor: "#2A86FF",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
