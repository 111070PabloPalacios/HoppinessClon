import React, { useContext } from "react";
import { View, Text } from "react-native";
import { CheckoutDetail } from "./checkoutDetail.component";
import { FoodScreen } from "../../features/food/screen/food.screen";
import { CartContext } from "../../services/cart.context";
import { Navigation } from "../../infrastructure/navigation";

export const GoToCheckout = ({navigation}) => {
  const { productList } = useContext(CartContext);

  return <>{productList.length > 0 ? <CheckoutDetail navigation={navigation}/> : <FoodScreen navigation={navigation}/>}</>;
};
