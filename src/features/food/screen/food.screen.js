import React, { useEffect, useContext} from "react";
import { View, FlatList, SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Appbar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { DropDownList } from "../../../components/dropdown/dropdownlist-component";
import { CheckoutButton } from "../../../components/checkoutButton/checkoutButton.component";
import { FoodList } from "./food-list.component";
import { FoodDeatil } from "./food-detail.component";
import { CartContext } from "../../../services/cart.context";
import { DropdownContext } from "../../../services/dropdown.context";
import { Header } from "../../../components/header/header.component";

export const FoodScreen = ({navigation}) => {
  const { productList } = useContext(CartContext);
  const { dropdownValue } = useContext(DropdownContext);
  
  useEffect(() => {
    if(dropdownValue === "delivery") {
      navigation.navigate("DeliveryForm", {navigation});
    }
  },[dropdownValue])

  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#0b2136"}}>
        <Appbar.BackAction />
        <Appbar.Content
          title="HOPPINESS CLUB"
          style={{ alignItems: "center" }}
        />
        <Appbar.Action icon="view-headline"/>
      </Appbar.Header>
        <FlatList
        ListFooterComponent={<FoodList navigation={navigation}/>} />
      {productList.length > 0 && 
      <CheckoutButton title="REALIZAR PEDIDO"
      quantity={productList.length}
      disabled={dropdownValue ? false : true}
      navigation={navigation}
      navigateTo="CheckoutDetail"
      />}
    </>
  );
};