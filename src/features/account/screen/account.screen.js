import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Button } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import styled from 'styled-components/native';

export const AccountScreen = ({navigation}) => {
  return (
    <Background>
        <AccountButton onPress={() => navigation.navigate('Login')}>
            <Text variant="buttonTitle">INICIAR SESION</Text>
        </AccountButton>
        <Spacer position="top" size="large"/>
        <AccountButton onPress={() => navigation.navigate('Register')}>
            <Text variant="buttonTitle">REGISTRARSE</Text>
        </AccountButton>
    </Background>
  );
};

const Background = styled(View)`
    flex: 1;
    background-color: #00139b;
    align-items: center;
    justify-content: center;
`;

const AccountButton = styled(TouchableOpacity)`
    border-color: white;
    border-width: 2px;
    border-radius: 50px;
    padding: 10px;
`;