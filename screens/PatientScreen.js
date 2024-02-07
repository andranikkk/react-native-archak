import React from "react";
import styled from "styled-components/native";
import { Text, View, Button, TouchableOpacity } from "react-native";

import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";

import { GrayText } from "../components/GrayText";
import CustomButton from "../components/CustomButton";

import { DATA } from "./HomeScreen";
import { Badge } from "../components/Badge";

const PatientScreen = ({ route }) => {
  const { user_id } = route.params;

  const user = DATA.flatMap((section) => section.data).find(
    (user) => user.user_id === user_id
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
            <MoreButton>
              <Fontisto name="more-v-a" size={24} color="gray" />
            </MoreButton>
            <AppointmentCardRow>
              <MaterialCommunityIcons name="tooth" size={24} color="gray" />
              <AppointmentCardLabel>
                Зуб: <Text style={{ fontWeight: "600" }}>12</Text>
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow>
              <MaterialIcons name="event-note" size={24} color="gray" />
              <AppointmentCardLabel>
                Диагноз:{" "}
                <Text style={{ fontWeight: "600" }}>{user.diagnosis}</Text>
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow
              style={{ marginTop: 15, justifyContent: "space-between" }}
            >
              <Badge style={{ width: 165 }} active>
                11.10.2019 - 15:40
              </Badge>
              <Badge style={{ width: 85 }} color="green">
                1500 руб.
              </Badge>
            </AppointmentCardRow>
          </AppointmentCard>
        </Container>
      </PatientAppointments>
    </View>
  );
};

const MoreButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position="absolute";
  right: 10px;
  top: 10px;
  width: 32px;
  height: 32px;
`;

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
