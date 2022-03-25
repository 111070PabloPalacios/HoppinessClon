import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { AccountScreen } from "../../features/account/screen/account.screen";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication.context";

export const Navigation = () => {

  const {isAuthenticated} = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator/> : <AccountNavigator/>}
    </NavigationContainer>
  );
};
