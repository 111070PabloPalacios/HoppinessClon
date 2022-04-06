import React, {useState, createContext} from "react";

export const AddressContext = createContext();

export const AddressContextProvider = ({children}) => {

    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [currentAddress, setCurrentAddress] = useState("");
    const [currentNumber, setCurrentNumber] = useState("");

    return(
        <AddressContext.Provider
         value={{
            address,
            number,
            currentAddress,
            currentNumber,
            setAddress,
            setNumber,
            setCurrentAddress,
            setCurrentNumber
         }}
        >
            {children}
        </AddressContext.Provider>
    )
}