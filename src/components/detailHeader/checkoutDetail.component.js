import React, { useContext, useEffect, useState } from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { CartContext } from "../../services/cart.context";
import { CheckoutButton } from "../checkoutButton/checkoutButton.component";
import { Text } from "../typography/text.component";
import { Spacer } from "../spacer/spacer.component";
import styled from "styled-components/native";

export const CheckoutDetail = ({ navigation }) => {
  const { productAmount, productList, productTotal } = useContext(CartContext);
  const [total, setTotal] = useState(null);

  console.log(productTotal.reduce((partialSum, a) => partialSum + a, 0));

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <TitleWrapper>
            <Title variant="label">DETALLE DEL PEDIDO</Title>
          </TitleWrapper>
          <BodyWrapper>
            <Title variant="label">CUPON DE DESCUENTO</Title>
            <View>
              <ButtonWrapper>
                <ButtonText variant="cardTitle">VALIDAR</ButtonText>
              </ButtonWrapper>
              <Input></Input>
            </View>
            <View style={{ paddingTop: 40 }}>
              {productAmount.map((x, i) => (
                <View key={x + "pr" + i} style={{ paddingBottom: 30 }}>
                  <Text variant="sectionTitle" style={{ position: "absolute" }}>
                    {x}X
                  </Text>
                </View>
              ))}
            </View>
            <View style={{ top: 122, left: 50, position: "absolute" }}>
              {productList.map((x) => (
                <View key={x.key} style={{ paddingBottom: 8, flexDirection: "row" }}>
                  <Text variant="cardTitle">{x.title}</Text>
                </View>
              ))}
            </View>
            <View style={{ position: "absolute", left: 300, top: 122 }}>
              {productList.map((x) => (
                <View style={{ paddingBottom: 8, flexDirection: "row" }}>
                  <Text variant="cardTitle">${x.price}</Text>
                </View>
              ))}
            </View>
            <Spacer position="top" size="large" />
            <Text variant="label">SUBTOTAL</Text>
            <View style={{ position: "absolute", left: 300, top: 199 }}>
              <Text variant="cardTitle">
                ${productTotal.reduce((partialSum, a) => partialSum + a, 0)}
              </Text>
            </View>
            <Spacer position="top" size="large" />
            <Text variant="label">COSTO DE ENVIO</Text>
            <View style={{ position: "absolute", left: 300, top: 240 }}>
              <Text variant="cardTitle">$0</Text>
            </View>
            <Spacer position="top" size="large" />
            <Text
              variant="cardTitle"
              style={{ borderBottomColor: "gray", borderBottomWidth: 2 }}
            >
              TOTAL
            </Text>
            <View style={{ position: "absolute", left: 300, top: 272 }}>
              <Text variant="cardTitle">
                ${productTotal.reduce((partialSum, a) => partialSum + a, 0)}
              </Text>
            </View>
            <Spacer position="top" size="large" />
            <Text variant="sectionTitle">ACLARACIONES</Text>
            <TextArea
              textAlignVertical="top"
              multiline={true}
              numberOfLines={4}
            />
          </BodyWrapper>
          <CheckoutButton
            title="REALIZAR PEDIDO"
            quantity={productList.length}
            navigation={navigation}
            navigateTo="OrderMade"
            products={productList}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const ButtonWrapper = styled(TouchableOpacity)`
  position: absolute;
  right: 0;
  padding: 8px;
  align-items: flex-end;
`;

const TextArea = styled(TextInput)`
  background-color: #f9f9f9;
  border-color: #ebebeb;
  border-width: 2px;
  padding: 18px;
`;

const TitleWrapper = styled(View)`
  background-color: #e5e5e5;
  padding: 15px;
  align-items: center;
`;

const Input = styled(TextInput)`
  height: 40px;
  width: 75%;
  border-width: 2px;
  padding: 10px;
`;

const ButtonText = styled(Text)`
  border-bottom-color: red;
  border-bottom-width: 2px;
`;

const Title = styled(Text)`
  color: #0d1f31;
  font-weight: bold;
`;

const BodyWrapper = styled(View)`
  padding: 20px;
`;
