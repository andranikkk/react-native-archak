import React from "react";
import styled from "styled-components/native";
import { Text, View, Button, TouchableOpacity } from "react-native";

import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { GrayText } from "../components/GrayText";
import CustomButton from "../components/CustomButton";

import { DATA } from "./HomeScreen";

const PatientScreen = ({ route }) => {
  const { userId } = route.params;

  const user = DATA.flatMap((section) => section.data).find(
    (user) => user.userId === userId
  );

  return (
    <View style={{ flex: 1, background: "#f8fafd" }}>
      {user ? (
        <PatientDetails>
          <PatientFullName>
            <Text>{user.user.fullname}</Text>
          </PatientFullName>
          <GrayText>{user.user.phone}</GrayText>

          <PatientButtons>
            <CustomButton>Формула зубов</CustomButton>
            <CallButton
              style={{
                shadowColor: "green",
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
                shadowOpacity: 1,
                shadowRadius: 5,
                elevation: 8,
              }}
            >
              <Feather name="phone-call" size={24} color="black" />
            </CallButton>
          </PatientButtons>
        </PatientDetails>
      ) : (
        <Text>User not found</Text>
      )}

      <PatientAppointments>
        <Container>
          <AppointmentCard>
            <AppointmentCardRow>
              <MaterialCommunityIcons name="tooth" size={24} color="gray" />
              <AppointmentCardLabel>
                Зуб: <Text style={{ fontWeight: "600" }}>12</Text>
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow>
              <MaterialIcons name="event-note" size={24} color="gray" />
              <AppointmentCardLabel>
                Диагноз: <Text style={{ fontWeight: "600" }}>{ user.diagnosis }</Text>
              </AppointmentCardLabel>
            </AppointmentCardRow>
          </AppointmentCard>
        </Container>
      </PatientAppointments>
    </View>
  );
};

const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 7.5px;
  margin-top: 7.5px;
`;

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const AppointmentCard = styled.View`
  shadow-color: gray;
  elevation: 1.2;
  shadow-opacity: 0.4;
  shadow-radius: 4px;
  padding: 13px 25px;
  border-radius: 10px;
  background: white;
`;

const Container = styled.View`
  padding: 25px;
  flex: 1;
`;

const PatientDetails = styled(Container)`
  flex: 0.3;
  background: white;
  padding-bottom: 5px;
`;

const PatientAppointments = styled.View`
  flex: 1;
`;

const PatientButtons = styled.View`
  display: flex;
  padding-top: 13px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CallButton = styled.TouchableOpacity`
  padding: 3px 3px 0 0;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 58px;
  height: 58px;
  background: rgb(13, 212, 13);
`;

const PatientFullName = styled.Text`
  font-weight: 800;
  font-size: 26px;
  line-height: 30px;
  margin-bottom: 7px;
`;

export default PatientScreen;
