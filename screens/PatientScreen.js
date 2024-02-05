import React from "react";
import { Text, View, Button } from "react-native";

const PatientScreen = ({ route }) => {
  const { userId } = route.params;

  return (
    <View>
      <Text>Patient: {userId}</Text>
    </View>
  );
};

export default PatientScreen;
