import React, {useState, createContext} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [productList, setProductList] = useState([]);
    const [productAmount, setProductAmount] = useState([]);
    const [productTotal, setProductTotal] = useState([]);
    const [orderMade, setOrderMade] = useState(false);
    const [aclaracionComida, setAclaracionComida] = useState(null);
    const [aclaracionOrden, setAclaracionOrden] = useState(null);

    console.log(productTotal);

    return(
        <CartContext.Provider
        value={{
            productList,
            productAmount,
            productTotal,
            orderMade,
            aclaracionComida,
            aclaracionOrden,
            setProductList,
            setProductAmount,
            setProductTotal,
            setOrderMade,
            setAclaracionComida,
            setAclaracionOrden
        }}
        >
            {children}
        </CartContext.Provider>
    );
}


