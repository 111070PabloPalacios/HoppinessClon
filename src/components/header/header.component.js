import React from "react";
import { View } from "react-native";
import { DropDownList } from "../dropdown/dropdownlist-component";
import { Text } from "../typography/text.component";
import styled from "styled-components";

export const Header = () => {
  const dropdownItems = [{ label: "Lo antes posible", value: "antes" }];
  const secondDropDownItems = [
    { label: "Retiro en local", value: "retirolocal" },
    { label: "Delivery", value: "delivery" },
  ];

  return (
    <View>
      <Wrapper>
        <HeaderImage
          source={{
            uri: "https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/83468364_2631551470394129_1931006851492921622_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-GkGF0VNC08AX9KzDNB&_nc_ht=scontent.fcor2-2.fna&oh=00_AT8AM9B0zE7XbG-ETIkJFofozVF9JmPNnwLgEEFp0UfIGw&oe=622D76A8",
          }}
        />
        <Text variant="label">Entre 45 y 60 | Sin minimo |</Text>
      </Wrapper>
      <DropDownWrapper>
        <DropDownList
          values={dropdownItems}
          placeholder="Lo antes posible"
        />
      </DropDownWrapper>
      <DropDownWrapper>
        <DropDownList
          values={secondDropDownItems}
          placeholder={"¿Local o Delivery?"}
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