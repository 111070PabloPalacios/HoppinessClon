import React, {useState, createContext} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [productList, setProductList] = useState([]);
    const [productAmount, setProductAmount] = useState([]);
    const [productTotal, setProductTotal] = useState([]);

    console.log(productTotal);

    return(
        <CartContext.Provider
        value={{
            productList,
            productAmount,
            productTotal,
            setProductList,
            setProductAmount,
            setProductTotal
        }}
        >
            {children}
        </CartContext.Provider>
    );
}


