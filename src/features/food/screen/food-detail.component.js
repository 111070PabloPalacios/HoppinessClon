import React, {useContext} from "react";
import { Image, ScrollView, View, TextInput, FlatList, StyleSheet} from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { FoodHeader } from "../components/food-body.component";
import { CloseButton } from "../../../components/header/close-window.component";
import { CartContext } from "../../../services/cart.context";
import styled from "styled-components/native";

export const FoodDeatil = ({ route, navigation }) => {
  const { foodArray } = route.params;
  const { setAclaracionComida } = useContext(CartContext);

  const header = (
    <View>
      <CloseButton navigation={navigation}/>
      <View style={{ alignItems: "center" }}>
        {foodArray.image ? (
          <FoodImage
            source={{ uri: foodArray.image }}
          />
        ) : (
          <Text variant="label"></Text>
        )}
      </View>
      <BodyWrapper>
        <Title variant="cardTitle">{foodArray.title}</Title>
        <Description variant="label">{foodArray.description}</Description>
        <Spacer position="top" size="large" />
        <Text variant="sectionTitle">ACLARACIONES</Text>
        <TextArea textAlignVertical="top" multiline={true} numberOfLines={4} 
        maxLength={150} onChangeText={(t) => setAclaracionComida(t)}
        />
        <Spacer position="bottom" size="large" />
      </BodyWrapper>
    </View>
  );

  return (
    <>
    <FlatList ListHeaderComponent={header} />
    <FooterComponent price={foodArray} navigation={navigation} />
    </>
  );
};

const FoodImage = styled(Image)`
  height: 300px;
  width: 310px;
  border-radius: 10px;
`;

const BodyWrapper = styled(View)`
  padding-left: 25px;
  padding-right: 25px;
  padding-top: ${(props) => props.image ? '50px' : '5px'};
`;

const TextArea = styled(TextInput)`
  background-color: #f9f9f9;
  border-color: #ebebeb;
  border-width: 2px;
  padding: 18px;
`;

const Title = styled(Text)`
  font-size: 25px;
`;

const Description = styled(Text)`
  padding-top: 8px;
  line-height: 24px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});