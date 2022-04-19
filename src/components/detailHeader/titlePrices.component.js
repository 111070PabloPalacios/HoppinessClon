import React from "react";
import { View } from "react-native";
import { Text } from "../typography/text.component";

export const TitlePrices = ({ title, total, variant}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <View style={{ marginRight: "auto" }}>
        <Text variant="label">{title}</Text>
      </View>
      {variant === "delivery" ? (
        <Text variant="cardTitle">${60}</Text>
      ) : (
        <Text variant="cardTitle">
          ${total ? total.reduce((partialSum, a) => partialSum + a, 0) : 0}
        </Text>
      )}
    </View>
  );
};
