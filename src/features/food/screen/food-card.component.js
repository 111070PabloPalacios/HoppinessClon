import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const FoodCard = ({foodArray, navigation}) => {
  return (
    <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate("FoodDeatil", {foodArray})}>
    <MainCard>
      <Title variant="cardTitle">{foodArray.title}</Title>
      <DescriptionContainer>
        <Description
          variant="label"
          numberOfLines={2}
        >
          {foodArray.description}
        </Description>
        <Price variant="cardTitle">
          ${foodArray.price}
        </Price>
      </DescriptionContainer>
      <ImageWrapper>
        <CardImage source={foodArray.image ? {uri: foodArray.image} : undefined} />
      </ImageWrapper>
    </MainCard>
    </TouchableOpacity>
  );
};

const Title = styled(Text)`
  position: absolute;
`
const Description = styled(Text)`
  position: absolute;
  margin-top: 30px;
`;

const Price = styled(Text)`
  position: absolute;
  margin-top: 73px;
`

const DescriptionContainer = styled(View)`
  padding-left: 110px;
`;

const MainCard = styled(Card)`
  display: flex
  flex: 1;
  border-radius: 0;
  background-color: #ffffff;
  border-bottom-color: #efefef;
  border-bottom-width: 5px;
  padding: 10px;
`;

const CardImage = styled(Card.Cover)`
  height: 100px;
  width: 100px;
  border-radius: 10px;
`;

const ImageWrapper = styled(View)`
  align-items: flex-end;
`;
