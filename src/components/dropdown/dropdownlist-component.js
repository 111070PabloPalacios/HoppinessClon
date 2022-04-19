import React, { useState, useContext, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import styled from "styled-components/native";
import { DropdownContext } from "../../services/dropdown.context";
import { AddressContext } from "../../services/address.context";

export const DropDownList = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(props.values);
  const { dropdownValue, setDropdownValue } = useContext(DropdownContext);
  const { address, currentAddress } = useContext(AddressContext);

  useEffect(() => {
    setDropdownValue(value);
    setOpen(false);
    console.log(open);
  }, [value]);

  return (
    <DropDown
      open={props.isOpen ? open : props.isOpen}
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
        width: 250,
        elevation: 1,
      }}
      onPress={() => props.dropdownHandler()}
    />
  );
};

const DropDown = styled(DropDownPicker).attrs({})`
  width: 78%;
  border-radius: 20px;
`;
