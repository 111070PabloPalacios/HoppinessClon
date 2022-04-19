import React, { useEffect, useContext } from "react";
import { View } from "react-native";
//import { Text } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { CartContext } from "../../../services/cart.context";
import { DropdownContext } from "../../../services/dropdown.context";
import styled from "styled-components/native";

export const OrderMade = () => {
  const { setOrderMade, setProductList, setProductAmount, setProductTotal } =
    useContext(CartContext);
  const {setDropdownValue} = useContext(DropdownContext);

  useEffect(() => {
    setProductList([]);
    setProductAmount([]);
    setProductTotal([]);
    setDropdownValue(null);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: 'center'}}>
        <Text variant="titleVariant">Tu orden fue realizada!</Text>
    </View>
  );
};

const Wrapper = styled(View)``;
