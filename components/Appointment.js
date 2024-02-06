import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { GrayText } from "./GrayText";
import { Badge } from "./Badge";

const Appointment = ({
  user,
  fullname,
  avatar,
  diagnosis,
  active,
  time,
  userId,
  onPlus,
}) => {
  const handleUserClick = () => {
    onPlus(userId);
  };

  return (
    <GroupItem>
      <OpacityButton onPress={handleUserClick}>
        <Avatar
          source={{
            uri: user.avatar,
          }}
        />
        <View style={{ flex: 1 }}>
          <FullName>{user.fullname}</FullName>
          <GrayText>{diagnosis}</GrayText>
        </View>
        <Badge active={active}>{time}</Badge>
      </OpacityButton>
    </GroupItem>
  );
};

Appointment.defaultProps = {
  title: "Unknown",
  items: [],
};

// const GroupDate = styled.Text`
//   background: ${(props) => (props.active ? "#2A86FF" : "#E9F5FF")};
//   color: ${(props) => (props.active ? "#fff" : "#4294ff")};
//   border-radius: 18px;
//   font-weight: 600;
//   font-size: 14px;
//   width: 70px;
//   height: 32px;
//   text-align: center;
//   line-height: 30px;
// `;

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

const OpacityButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: row;
  borderbottomwidth: 1px;
  borderbottomcolor: rgb(220, 220, 220);
  padding: 20px;
`;

export default Appointment;
