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
  is_active,
  time,
  user_id,
  onPlus,
}) => {
  const handleUserClick = () => {
    onPlus(user_id);
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
        <Badge active={is_active}>{time}</Badge>
      </OpacityButton>
    </GroupItem>
  );
};

Appointment.defaultProps = {
  title: "Unknown",
  items: [],
};

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
