import React, { useEffect, useContext, useState } from "react";
import { View, FlatList, SafeAreaView, ScrollView, Image } from "react-native";
import styled from "styled-components/native";
import { Appbar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { DropDownList } from "../../../components/dropdown/dropdownlist-component";
import { CheckoutButton } from "../../../components/checkoutButton/checkoutButton.component";
import { FoodList } from "./food-list.component";
import { FoodDeatil } from "./food-detail.component";
import { FoodContext } from "../../../services/food.context";
import { CartContext } from "../../../services/cart.context";
import { DropdownContext } from "../../../services/dropdown.context";
import { Header } from "../../../components/header/header.component";
import { LogoutMenu } from "./logout.component";
import { DrawerNavigator } from "../../../infrastructure/navigation/app.navigator";

export const FoodScreen = ({ navigation }) => {
  const { productList } = useContext(CartContext);
  const { dropdownValue } = useContext(DropdownContext);
  const { isLoading } = useContext(FoodContext);
  const [modalState, setModalState] = useState(false);

  //console.log(modalState);

  useEffect(() => {
    if (dropdownValue === "delivery") {
      navigation.navigate("DeliveryForm", { navigation });
    }
    
  }, [dropdownValue]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen>
          <LoadingLogo
            source={{
              uri: "https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/83468364_2631551470394129_1931006851492921622_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_6nEgqu96iwAX_xC0Nx&_nc_ht=scontent.fcor2-2.fna&oh=00_AT9A2T40_-LZ7q3mbwzh8tI-Bmqczln8dIIpCqXB6J9VNw&oe=6264D5A8",
            }}
          />
        </LoadingScreen>
      ) : (
        <>
       <Appbar.Header style={{ backgroundColor: "#0b2136" }}>
            <Appbar.Content
              title="HOPPINESS CLUB"
              style={{ alignItems: "center" }}
            />
            <Appbar.Action icon="view-headline" 
            onPress={() => setModalState(true)}
            />
      </Appbar.Header>
      <LogoutMenu openModal={modalState} useModalState={setModalState}/>
          <FlatList
            ListFooterComponent={<FoodList navigation={navigation} />}
          />
          {productList.length > 0 && (
            <CheckoutButton
              title="REALIZAR PEDIDO"
              quantity={productList.length}
              disabled={dropdownValue ? false : true}
              navigation={navigation}
              navigateTo="GoToCheckout"
            />
          )}
        </>
      )}
    </>
  );
};

const LoadingScreen = styled.View`
  flex: 1;
  background-color: #00139b;
  align-items: center;
  justify-content: center;
`;

const LoadingLogo = styled(Image)`
  width: 100px;
  height: 100px;
`;
