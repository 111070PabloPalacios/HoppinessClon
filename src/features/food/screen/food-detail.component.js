import React from "react";
import { Image, View, TextInput, FlatList } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { CloseButton } from "../../../components/header/close-window.component";
import styled from "styled-components";
import { MainButton } from "../../../components/mainButton/mainButton.component";

export const FoodDeatil = ({ route, navigation }) => {
  const { foodArray } = route.params;

  const header = (
    <View>
      <CloseButton navigation={navigation}/>
      <View style={{ alignItems: "center" }}>
        {foodArray.image ? (
          <Image
            style={{ height: 300, width: 310, borderRadius: 10 }}
            source={{ uri: foodArray.image }}
          />
        ) : (
          <Text variant="label"></Text>
        )}
      </View>
      <BodyWrapper>
        <Title variant="cardTitle">{foodArray.title}</Title>
        <Description variant="label">{foodArray.description}</Description>
        <Spacer position="top" size="large" />
        <Text variant="sectionTitle">ACLARACIONES</Text>
        <TextArea textAlignVertical="top" multiline={true} numberOfLines={4} />
        <Spacer position="bottom" size="large" />
      </BodyWrapper>
    </View>
  );

  return (
    <>
      <FlatList ListHeaderComponent={header} />
      <FooterComponent price={foodArray} navigation={navigation} />
    </>
  );
};

const BodyWrapper = styled(View)`
  padding-left: 25px;
  padding-right: 25px;
  padding-top: ${(props) => props.image ? '50px' : '5px'};
`;

const TextArea = styled(TextInput)`
  background-color: #f9f9f9;
  border-color: #ebebeb;
  border-width: 2px;
  padding: 18px;
`;

const Title = styled(Text)`
  font-size: 25px;
`;

const Description = styled(Text)`
  padding-top: 8px;
  line-height: 24px;
`;
