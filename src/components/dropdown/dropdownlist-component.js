import React, { useState, useContext, useEffect } from "react";
import { DropdownContext } from "../../services/dropdown.context";
import { View } from "react-native"
import { Text } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styled from "styled-components/native";

export const DropDownList = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(props.values);
  const {setDropdownValue} = useContext(DropdownContext);

  useEffect(() =>{
    setDropdownValue(value);
  },[value])

  return (
    <DropDown
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={props.placeholder}
      dropDownDirection="BOTTOM"
      zIndex={1000}
      zIndexInverse={7000}

      dropDownContainerStyle={{
        width: 260,
        width: 218,
        elevation: 1
      }}
    />
  );
};

const DropDown = styled(DropDownPicker).attrs({
})`
  width: 70%;
  border-radius: 20px;
`;