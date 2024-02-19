import { Text, TouchableOpacity } from "react-native";
import { TouchableProps } from "./types";
import { Valid } from "@core/components/helpers";
import { Styles } from "./styles";

export const Touchable = (props: TouchableProps) => {
  const styles = Styles(props);
  return (
    <TouchableOpacity {...styles} {...props}>
      <TouchableIcon {...props} />
    </TouchableOpacity>
  );
};

export const TouchableIcon = (props: TouchableProps) => {
  const { text } = props;
  return (
    <Valid isValid={Boolean(text)}>
      <Text>{text}</Text>
    </Valid>
  );
};
