import React, { useState, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [inputColor, setInputColor] = useState("purple");
  const { onLogin, error } = useContext(AuthenticationContext);

  const validate = () => {
    if(email === ""|| password === ""){
      if(email === "") {
        setErrorValue("Se debe ingresar un correo electronico");
        setInputColor("red");
      }
      else 
      if(password === "") {
        setErrorValue("Se debe ingresar una contraseña");
        setInputColor("red");
      }
    }
    else {
      if(error === "FirebaseError: Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)."){
        setErrorValue("La contraseña es incorrecta");
      }
      else 
      if(error === "FirebaseError: Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)."){
        setErrorValue("El E-mail es incorrecto");
      }
    }

    onLogin(email, password)

  };

  const updateEmail = (u) => {
    setEmail(u);
    setInputColor("purple");
    setErrorValue("");
  };

  const updatePassword = (p) => {
    setPassword(p);
    setInputColor("purple");
    setErrorValue("");
  }

  return (
    <>
      <View style={{paddingTop: 32, alignItems: 'flex-end', backgroundColor: "#00139b"}}>
        <TouchableOpacity
          style={{
            paddingRight: 20,}}
         onPress={() => navigation.navigate('Main')}
        >
          <Text variant="buttonTitle">X</Text>
        </TouchableOpacity>
      </View>
      <Background>
        <Input placeholder="E-mail" keyboardType="email-address" value={email}
        theme={{colors: {primary: inputColor}}}
        onChangeText={(u) => updateEmail(u)}/>
        <Spacer position="top" size="large" />
        <Input placeholder="Contraseña" secureTextEntry value={password}
        theme={{colors: {primary: inputColor}}} 
        onChangeText={(p) => updatePassword(p)}/>
        <Spacer position="top" size="large" />
        <Spacer position="top" size="large" />
        <AccountButton onPress={() => validate()}>
          <Text variant="buttonTitle">INICIAR SESION</Text>
        </AccountButton>
        {
            error && <ErrorText variant="error">{errorValue}</ErrorText>
        }
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

const ErrorText = styled(Text)`
  padding: 10px;
  color: red;
`;
