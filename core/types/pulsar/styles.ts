import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Theme, Tokens } from "./theme";

export type Styles = ViewStyle | TextStyle | ImageStyle;

export type NovaStyle<P = {}> =
  | ((theme: Tokens, props?: P) => Styles)
  | Styles
  | Array<Styles>;

export type StyleSheet<T> = {
  [P in keyof T]: Styles;
};

export type NovaStyleSheet<T> = {
  [P in keyof T]:
    | ((props?: unknown) => Styles)
    | ((props?: unknown) => (theme: Theme) => Styles)
    | Styles;
};
