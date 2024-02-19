import { Text, TouchableOpacity } from "react-native";
import { TouchableProps } from "./types";
import { Valid } from "@core/components/helpers";
import { Styles } from "./styles";

export const Touchable = (props: TouchableProps) => {
  const { text } = props;
  const styles = Styles(props);
  return (
    <TouchableOpacity {...styles} {...props}>
      <Valid isValid={Boolean(text)}>
        <Text>{text}</Text>
      </Valid>
    </TouchableOpacity>
  );
};
