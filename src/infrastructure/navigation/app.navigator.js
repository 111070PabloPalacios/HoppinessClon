import React from "react";
import { FoodScreen } from "../../features/food/screen/food.screen";
import { FoodContextProvider } from "../../services/food.context";
import { CartContextProvider } from "../../services/cart.context";
import { DropdownContextProvider } from "../../services/dropdown.context";
import { AddressContextProvider } from "../../services/address.context";
import {
  useFonts as UseOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as UseLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FoodDeatil } from "../../features/food/screen/food-detail.component";
import { CheckoutDetail } from "../../components/detailHeader/checkoutDetail.component";
import { OrderMade } from "../../features/food/screen/order.component";
import { DeliveryForm } from "../../features/delivery/deilvery.screen";
const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const [oswaldLoaded] = UseOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = UseLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
      <>
        <FoodContextProvider>
          <CartContextProvider>
            <DropdownContextProvider>
              <AddressContextProvider>
                  <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="FoodScreen" component={FoodScreen} />
                    <Stack.Screen name="FoodDeatil" component={FoodDeatil} />
                    <Stack.Screen
                      name="CheckoutDetail"
                      component={CheckoutDetail}
                    />
                    <Stack.Screen name="OrderMade" component={OrderMade} />
                    <Stack.Screen
                      name="DeliveryForm"
                      component={DeliveryForm}
                    />
                  </Stack.Navigator>
              </AddressContextProvider>
            </DropdownContextProvider>
          </CartContextProvider>
        </FoodContextProvider>
        </>
  );
}