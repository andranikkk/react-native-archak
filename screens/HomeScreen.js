import React from "react";
import { StyleSheet, Text, View, Button, SectionList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

import Appointment from "../components/Appointment";
import SectionTitle from "../components/SectionTitle";

const DATA = [
  {
    title: "14 сентября",
    data: [
      {
        active: true,
        userId: 1,
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
        },
      },
      {
        active: false,
        userId: 2,
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
        },
      },
      {
        active: false,
        userId: 3,
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
        },
      },
      {
        active: false,
        userId: 4,
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
        },
      },
      {
        active: false,
        time: "15:30",
        userId: 5,
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
        },
      },
    ],
  },
  {
    title: "16 сентября",
    data: [
      {
        active: false,
        time: "15:30",
        userId: 6,
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        },
      },
      {
        active: false,
        time: "15:30",
        userId: 7,
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        },
      },
      {
        active: false,
        time: "15:30",
        userId: 8,
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        },
      },
      {
        active: false,
        time: "15:30",
        userId: 9,
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        },
      },
      {
        active: false,
        time: "15:30",
        userId: 10,
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        },
      },
      {
        active: false,
        time: "15:30",
        userId: 11,
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        },
      },
      {
        active: false,
        time: "15:30",
        userId: 12,
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        },
      },
    ],
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <OneButton>
            <Appointment
              active={item.active}
              time={item.time}
              userId={item.userId}
              diagnosis={item.diagnosis}
              user={item.user}
              // avatar={item.user.avatar}
            />
            {/* {...item}  */}
            <Button
              title="Открыть подписчикa"
              onPress={() =>
                navigation.navigate("Patient", { userId: item.userId })
              }
            />
          </OneButton>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle> {title} </SectionTitle>
        )}
      />
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

const OneButton = styled.View`
  display: flex;
  flex-direction: row;
`;

export default HomeScreen;
