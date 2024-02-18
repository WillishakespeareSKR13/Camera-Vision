import { View as ViewNative } from "react-native";
import { ViewProps } from "./types";

export const View = (props: ViewProps) => {
  return <ViewNative {...props} />;
};
