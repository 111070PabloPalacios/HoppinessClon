import React, {useEffect, useContext} from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { CartContext } from "../../../services/cart.context";

export const OrderMade = () => {

    const {setOrderMade, setProductList, setProductAmount, setProductTotal} = useContext(CartContext);

    useEffect(() => {
        setProductList([]);
        setProductAmount([]);
        setProductTotal([]);
    },[])

    return(
        <View style={{marginTop: 50}}>
        <Text variant="sectionTitle">Tu orden fue realizada!</Text>
        </View>
    );
}