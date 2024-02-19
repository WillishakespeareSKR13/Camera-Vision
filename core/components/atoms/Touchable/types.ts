import { TouchableOpacityProps } from "react-native";

export type TouchableProps = TouchableOpacityProps & {
  variant?: "primary" | "secondary";
  text?: string;
};
