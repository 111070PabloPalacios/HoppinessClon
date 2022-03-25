import React, {useState, createContext} from "react";

export const AddressContext = createContext();

export const AddressContextProvider = ({children}) => {

    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");

    return(
        <AddressContext.Provider
         value={{
            address,
            number,
            setAddress,
            setNumber
         }}
        >
            {children}
        </AddressContext.Provider>
    )
}