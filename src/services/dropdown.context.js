import React, { useState, createContext } from "react";

export const DropdownContext = createContext();

export const DropdownContextProvider = ({ children }) => {
  const [dropdownValue, setDropdownValue] = useState(null);

  return (
    <DropdownContext.Provider
      value={{
        dropdownValue,
        setDropdownValue,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
