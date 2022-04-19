import React, {useState, useCallback} from "react";
import { View } from "react-native";
import { DropDownList } from "../dropdown/dropdownlist-component";
import { Text } from "../typography/text.component";
import styled from "styled-components";

export const Header = () => {
  const dropdownItems = [{ label: "Lo antes posible", value: "antes" }];
  const [firstDropdownOpen, setFirstDropdownOpen] = useState(false);
  const [secondDropdownOpen, setSecondDropdownOpen] = useState(false);
  const secondDropDownItems = [
    { label: "Retiro en local", value: "retirolocal" },
    { label: "Delivery", value: "delivery" },
  ];

  const firstDropdownHandler = () => {
    setSecondDropdownOpen(false);
    setFirstDropdownOpen(true);
    //console.log(secondDropdownOpen);
    if(firstDropdownOpen === true){
      setFirstDropdownOpen(false);
    }
  }

  const secondDropdownHandler = () => {
    setFirstDropdownOpen(false);
    setSecondDropdownOpen(true);
    if(secondDropdownOpen === true){
      setSecondDropdownOpen(false);
    }
  }

  return (
    <View>
      <Wrapper>
        <HeaderImage
          source={{
            uri: "https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/83468364_2631551470394129_1931006851492921622_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rHC-dShSvRcAX_E14Ax&_nc_ht=scontent.fcor2-2.fna&oh=00_AT-s9G8SBMiWrFSV83By1U5N0oxmzT1mFb0sesa8wG_nAw&oe=62789C28",
          }}
        />
        <Text variant="label">Entre 45 y 60 | Sin minimo |</Text>
      </Wrapper>
      <DropDownWrapper>
        <DropDownList
          values={dropdownItems}
          placeholder="Lo antes posible"
          dropdownHandler={() => firstDropdownHandler()}
          isOpen={firstDropdownOpen}
        />
      </DropDownWrapper>
      <DropDownWrapper>
        <DropDownList
          values={secondDropDownItems}
          placeholder={"¿Local o Delivery?"}
          dropdownHandler={() => secondDropdownHandler()}
          isOpen={secondDropdownOpen}
        />
      </DropDownWrapper>
    </View>
  );
};

const HeaderImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const DropDownWrapper = styled(View)`
  margin-left: 22%;
  padding-top: 5%;
`;

const Wrapper = styled(View)`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;