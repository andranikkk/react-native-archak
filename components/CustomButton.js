import React from "react";
import styled from "styled-components/native";

const CustomButton = ({ children }) => {
  return (
    <MyButton
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
      <ButtonText>{children}</ButtonText>
    </MyButton>
  );
};

const MyButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #2a86ff;
  height: 45px;
  width: 270px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 3px;
`;

export default CustomButton;
