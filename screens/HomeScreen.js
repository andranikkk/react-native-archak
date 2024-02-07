import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SectionList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

import Appointment from "../components/Appointment";
import SectionTitle from "../components/SectionTitle";


const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://trycode.pw/c/9CJ31.json").then(({ data }) => {
      console.log(data);
      setData(data);
    });
  }, []);

  const handleUserClick = (user_id) => {
    navigation.navigate("Patient", { user_id });
  };

  return (
    <Container>
      {data && (
        <SectionList
          sections={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <Appointment
              onPlus={(user_id) => handleUserClick(user_id)}
              {...item}
              // active={item.active}
              // time={item.time}
              // user_id={item.user_id}
              // diagnosis={item.diagnosis}
              // user={item.user}
              // avatar={item.user.avatar}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle> {title} </SectionTitle>
          )}
        />
      )}
      <PlusButton
        style={{
          shadowColor: "#006eff",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.8,
          shadowRadius: 3.5,
          elevation: 6,
        }}
      >
        <Ionicons name="add" size={35} color="white" />
      </PlusButton>
    </Container>
  );
};

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  right: 15px;
  bottom: 15px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 5px;
`;

export default HomeScreen;
