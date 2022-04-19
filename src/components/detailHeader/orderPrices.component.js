import React from "react";
import { View } from "react-native";
import { Text } from "../typography/text.component";
import styled from "styled-components/native";

export const OrderPrices = ({ productAmount, productList }) => {
  return (
    <Wrapper>
      <AmmountWrapper>
        {productAmount.map((x, i) => (
          <TextWrapper key={x + "pr" + i}>
            <Text variant="sectionTitle" style={{ position: "absolute" }}>
              {x}X
            </Text>
          </TextWrapper>
        ))}
      </AmmountWrapper>
      <TitleWrapper>
      {productList.map((x) => (
        <TextWrapper key={x.key}>
          <Text variant="cardTitle" style={{ position: "absolute" }}>{x.title}</Text>
        </TextWrapper>
      ))}
      </TitleWrapper>
      <PriceWrapper>
          {productList.map((x, index) => (
            <View key={"pric-" + index} style={{ paddingBottom: 8}}>
              <Text variant="cardTitle">${x.price}</Text>
            </View>
          ))}
     </PriceWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const AmmountWrapper = styled.View`
  padding-top: 40px;
  margin-right: auto;
`;

const TitleWrapper = styled.View`
  position: absolute;
  padding-top: 40px;
  left: 30px;
`;

const PriceWrapper = styled.View`
  padding-top: 40px;
`;

const TextWrapper = styled.View`
  padding-bottom: 30px;
`
