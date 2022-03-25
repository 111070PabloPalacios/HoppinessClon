import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../typography/text.component";
import styled from "styled-components";

export const CloseButton = ({navigation}) => (
  <TouchableOpacity
    style={{ paddingTop: 32, paddingRight: 24, alignItems: "flex-end" }}
    onPress={() => navigation.navigate("FoodScreen")}
  >
    <Text variant="cardTitle">X</Text>
  </TouchableOpacity>
);

const ButtonWrapper = styled(TouchableOpacity)`
    padding-top: 32px;
    padding-left: 24px;
    align-items: flex-end;
`;