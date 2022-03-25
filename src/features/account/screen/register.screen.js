import React, { useState, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication.context";

export const RegisterScreen = ({navigation}) => {
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  return (
    <>
      <View
        style={{
          paddingTop: 32,
          alignItems: "flex-end",
          backgroundColor: "#00139b",
        }}
      >
        <TouchableOpacity
          style={{
            paddingRight: 20,
          }}
          onPress={() => navigation.navigate("Main")}
        >
          <Text variant="buttonTitle">X</Text>
        </TouchableOpacity>
      </View>
      <Background>
        <Input label="E-mail" />
        <Spacer position="top" size="large" />
        <Input label="Contraseña" />
        <Spacer position="top" size="large" />
        <Input label="Repetir Contraseña" />
        <Spacer position="top" size="large" />
        <Spacer position="top" size="large" />
        <AccountButton>
          <Text variant="buttonTitle">REGISTRARSE</Text>
        </AccountButton>
      </Background>
    </>
  );
};

const Background = styled.View`
  flex: 1;
  background-color: #00139b;
  align-items: center;
  justify-content: center;
`;

const Input = styled(TextInput)`
  width: 250px;
  height: 32px;
  border-radius: 5px;
`;

const AccountButton = styled(TouchableOpacity)`
  border-color: white;
  border-width: 2px;
  border-radius: 50px;
  padding: 10px;
`;
