import React, {useState, useEffect} from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../typography/text.component";
import styled from "styled-components/native";

export const MainButton = ({ title, onPress, price, amount }) =>
    <Button onPress={onPress}>
      <Text variant="buttonTitle">{title}</Text>
      {price && (
        <PriceWrapper>
          <Text variant="buttonTitle">${price * amount}</Text>
        </PriceWrapper>
      )}
    </Button>;

const Button = styled(TouchableOpacity)`
  background-color: #5eb3b6;
  padding: 20px;
  flex-direction: row;
`;

const PriceWrapper = styled.View`
  flex: 1;
  align-items: flex-end;
`;
