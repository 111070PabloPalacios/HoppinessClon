import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Text } from "../typography/text.component";

export const RoundedButton = ({text, onPress, disabled}) => 
    <RoundButton onPress={onPress} 
    disabled={disabled}
    >
      <PlusButton variant="label">{text}</PlusButton>
    </RoundButton>;


const RoundButton = styled(TouchableOpacity)`
  background-color: #f9f9f9;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

const PlusButton = styled(Text)`
  font-size: 30px;
`;
