import styled from "styled-components/native";

export const Badge = styled.Text`
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
