import React, {useState, useContext} from "react";
import { View, Button, TouchableOpacity } from "react-native";
import { RoundedButton } from "../roundedButton/roundedButton.component";
import { MainButton } from "../mainButton/mainButton.component";
import { CartContext } from "../../services/cart.context";
import { Text } from "../typography/text.component";
import { Spacer } from "../spacer/spacer.component";
import styled from "styled-components";

export const FooterComponent = ({price, navigation}) => {
  const [amount, setAmount] = useState(1);
  const { setProductList,setProductAmount,setProductTotal } = useContext(CartContext);

    const navigate = () => {
      setProductList((arr) => [...arr, price]);
      setProductAmount((arr) => [...arr, amount]);
      setProductTotal((arr) => [...arr, amount * price.price]);
      navigation.navigate("FoodScreen");
    }

  return (
    <MainView>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <RoundedButton text="-" onPress={() => setAmount(amount -1)} 
        disabled={amount === 1 ? true : false}/>
        <Spacer position="left" size="large" />
        <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text variant="sectionTitle">{amount}</Text>
        </View>
        <Spacer position="right" size="large" />
        <RoundedButton text="+" onPress={() => setAmount(amount + 1)}/>
      </View>
      <Spacer position="bottom" size="medium"/>
      <View style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
        <MainButton title="AGREGAR AL PEDIDO" 
        onPress={() => navigate()} 
        price={price.price} amount={amount}/>
      </View>
    </MainView>
  );
};

const MainView = styled.View`
  background-color: white;
  padding-top: 20px;
`;

const PriceWrapper = styled.View`
  flex: 1;
  align-items: flex-end;
`;

const CartButton = styled(Button)`
  padding: 50px;
`;
