import React, { useState, createContext, useEffect } from "react";
import { FoodService } from "./food.service";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const FoodContext = createContext();

export const FoodContextProvider = ({children}) => {
    const [hoppinessNotCo, setHoppinessNotCo] = useState([]);
    const [hamburguesas, setHamburguesas] = useState([]);
    const [dipsDeSalsas, setDipsDeSalsas] = useState([]);
    const [gaseosas, setGaseosas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const data = () => {
      setIsLoading(true);
      setTimeout(() => {
        if (hoppinessNotCo.length === 0 && hamburguesas.length === 0) {
          FoodService("notcoandhoppiness", setHoppinessNotCo);
          FoodService("hamburguesas", setHamburguesas);
          FoodService("dipsdesalsas", setDipsDeSalsas);
          FoodService("gaseosas", setGaseosas);
          setIsLoading(false);
        }
      }, 2000);
      };
      console.log(isLoading);

      useEffect(() => {
        data();
       
      }, [])

      return (
          <FoodContext.Provider
          value={{
            hoppinessNotCo,
            hamburguesas,
            dipsDeSalsas,
            gaseosas
          }}
          >
              {children}
          </FoodContext.Provider>
      );
}