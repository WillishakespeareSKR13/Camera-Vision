import { AppearanceProps } from "./props";
import { Ref } from "react";
import { Styles } from "./styles";

export type PulsarComponent<P = object> = {
  children?: React.ReactNode;
  stylex?: Styles;
  style?: Styles;
  ref?: Ref<any>;
} & P &
  AppearanceProps;

export type NC<P extends object> = PulsarComponent<P>;
