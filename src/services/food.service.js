import React, {useState} from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const FoodService = (foodPage, array) => 

firebase
.firestore()
.collection(foodPage)
.get()
.then((querySnapshot) => {
    querySnapshot.forEach((element) => {
      var data = element.data();
      array((arr) => [...arr, data]);
    });
  });