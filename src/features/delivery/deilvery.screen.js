import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
  LogBox
} from "react-native";
import { Text } from "../../components/typography/text.component";
import { Spacer } from "../../components/spacer/spacer.component";
import { AddressContext } from "../../services/address.context";
import { CheckoutButton } from "../../components/checkoutButton/checkoutButton.component";
import { CloseButton } from "../../components/header/close-window.component";
import styled from "styled-components/native";

export const DeliveryForm = ({navigation}) => {
  const { address, number ,setAddress, setNumber, currentAddress, currentNumber,setCurrentAddress, setCurrentNumber } = useContext(AddressContext);
  const [floor, setFloor] = useState(null);

  LogBox.ignoreAllLogs();
  const onPressValue = () => {
    setCurrentAddress(address);
    setCurrentNumber(number);
    //console.log(currentAddress);
  }

  //console.log(currentAddress);

  const header = (
    <View style={{paddingTop: 50}}>
      <View
        style={{
          alignItems: "center",
          paddingTop: 12,
          borderBottomColor: "red",
          borderBottomWidth: 2,
          borderBottomLeftRadius: 300,
          borderBottomRightRadius: 300,
        }}
      >
        <Text variant="titleVariant">Ingresá tu dirección</Text>
      </View>
      <View style={{ paddingLeft: 42, paddingTop: 20 }}>
        <Text variant="formLabel">Dirección</Text>
        <Spacer position="top" size="medium" />
        <TextInput
          style={{ marginRight: 42, padding: 5, borderWidth: 1 }}
          placeholder={currentAddress.length > 0 ? currentAddress : "Calle y número"}
          onChangeText={(newText) => setAddress(newText)}
        />
        <Spacer position="top" size="small" />
        <TextInput
          style={{
            marginRight: 42,
            padding: 5,
            borderWidth: 1,
            backgroundColor: "#e5e5e5",
          }}
          placeholder="Córdoba"
          editable={false}
        />
        <Spacer position="top" size="large" />
        <Text variant="formLabel">PISO/DEPTO./UNIDAD/ETC.</Text>
        <Spacer position="top" size="medium" />
        <TextInput
          style={{ marginRight: 42, padding: 5, borderWidth: 1 }}
          placeholder={currentNumber.length > 0 ? currentNumber : "Opcional"}
          onChangeText={(n) => setNumber(n)}
        />
      </View>
    </View>
  );

  return (
    <>
      <FlatList ListHeaderComponent={header}/>
      <CheckoutButton
        title="CONTINUAR"
        navigation={navigation}
        navigateTo="FoodScreen"
        disabled={address.length === 0 ? true : false}
        address={address}
        onPressValue={() => onPressValue()}
      />
    </>
  );
};
