import React, {useContext, useEffect} from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../typography/text.component";
import styled from "styled-components/native";
import { CartContext } from "../../services/cart.context";
import { AddressContext } from "../../services/address.context";

export const CheckoutButton = ({
  title,
  navigateTo,
  quantity,
  disabled,
  navigation,
  products,
  address,
  onPressValue,
}) => {
  
  const { orderMade ,setProductList, setProductAmount, setProductTotal } = useContext(CartContext);
  //const {currentAddress ,setCurrentAddress, setCurrentNumber} = useContext(AddressContext);

 const onPress = () => {
  if(address){
    onPressValue();
  }
  //console.log(currentAddress);
  navigation.navigate(navigateTo, { navigation});
 };

  return (
    <View style={{ padding: 20 }}>
      <Button
        onPress={() => onPress()}
        disabled={disabled}
      >
        <Text variant="buttonTitle">
          {title} {quantity && "(" + quantity + ")"}
        </Text>
      </Button>
    </View>
  );
};

const Button = styled(TouchableOpacity)`
  background-color: ${(props) =>
    props.disabled === true ? "#f9f9f9" : "#5eb3b6"};
  padding: 20px;
  align-items: center;
`;

const PriceWrapper = styled.View`
  flex: 1;
  align-items: flex-end;
`;
