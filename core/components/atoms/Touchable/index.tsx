import { Text, TouchableOpacity } from "react-native";
import { TouchableProps } from "./types";
import { Valid } from "../../";

export const Touchable = (props: TouchableProps) => {
  const { text } = props;
  return (
    <TouchableOpacity {...props}>
      <Valid isValid={Boolean(text)}>
        <Text>{text}</Text>
      </Valid>
    </TouchableOpacity>
  );
};
