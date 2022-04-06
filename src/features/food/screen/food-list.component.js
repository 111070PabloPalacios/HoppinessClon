
import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { FoodContext } from "../../../services/food.context";
import { FoodCard } from "./food-card.component";
import { Header } from "../../../components/header/header.component";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTaTT5OfD8_KwdwKo3sgP66gwAOT07xO0",
  authDomain: "hoppinnessclon.firebaseapp.com",
  databaseURL: "https://hoppinnessclon-default-rtdb.firebaseio.com",
  projectId: "hoppinnessclon",
  storageBucket: "hoppinnessclon.appspot.com",
  messagingSenderId: "731319013056",
  appId: "1:731319013056:web:6fb5bc28c753940507a725",
};

const app = firebase.initializeApp(firebaseConfig);

export const FoodList = ({ navigation }) => {
  const { hoppinessNotCo, hamburguesas, dipsDeSalsas, gaseosas } =
    useContext(FoodContext);

  return (
    <View style={{backgroundColor: 'white'}}>
      <Header/>
      <SectionTitle variant="sectionTitle" style={{elevation: 0}}>NOTCO HOPPINESS</SectionTitle>
      {hoppinessNotCo.map((data, index) => (
        <FoodCard key={"notco-" + index} foodArray={data} navigation={navigation}/>
      ))}
      <SectionTitle variant="sectionTitle">HAMBURGUESAS</SectionTitle>
      {hamburguesas.map((data, index) => (
        <FoodCard key={"hamb-" + index} foodArray={data} navigation={navigation}/>
      ))}
      <SectionTitle variant="sectionTitle">SALSAS</SectionTitle>
      {dipsDeSalsas.map((data, index) => (
        <FoodCard key={"salsas-" + index} foodArray={data} navigation={navigation}/>
      ))}
      <SectionTitle variant="sectionTitle">GASEOSAS</SectionTitle>
      {gaseosas.map((data, index) => (
        <FoodCard key={"gaseosas-" + index} foodArray={data} navigation={navigation}/>
      ))}
    </View>
  );
};

const SectionTitle = styled(Text)`
  margin-left: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  elevation: 0;
`;