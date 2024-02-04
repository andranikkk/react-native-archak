import { StyleSheet, Text, View, SectionList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import Appointment from "./components/Appointment";
import SectionTitle from "./components/SectionTitle";

const DATA = [
  {
    title: "14 сентября",
    data: [
      {
        active: true,
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
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
        },
      },
      {
        time: "15:30",
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
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Анжела Матиева",
          avatar:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        },
      },
      {
        time: "15:30",
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

export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
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
}

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
  margin-top: 30px;
`;
