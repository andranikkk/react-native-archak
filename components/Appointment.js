import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import styled from "styled-components/native";

const Appointment = ({
  user,
  fullname,
  avatar,
  diagnosis,
  active,
  time,
  navigation,
  userId,
}) => {
  return (
    <GroupItem>
      <Avatar
        source={{
          uri: user.avatar,
        }}
      />
      <View style={{ flex: 1 }}>
        <FullName>{user.fullname} {userId}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>
      <GroupDate active={active}>{time}</GroupDate>
      {/* <Button
        title="Открыть"
        onPress={() => navigation.navigate("Patient", { userId: user.userId })}
      /> */}
    </GroupItem>
  );
};

Appointment.defaultProps = {
  title: "Unknown",
  items: [],
};

const GroupDate = styled.Text`
  background: ${(props) => (props.active ? "#2A86FF" : "#E9F5FF")};
  color: ${(props) => (props.active ? "#fff" : "#4294ff")};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;
`;

const GrayText = styled.Text`
  font-size: 16px;
  color: #88979f;
`;

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
  padding: 20px;
  borderbottomwidth: 1px;
  borderbottomcolor: rgb(220, 220, 220);
  width: 350px;
`;

export default Appointment;
