import { Shades } from "./shades";

export type Properties =
  | "background"
  | "foreground"
  | "text"
  | "acent"
  | "opacity"
  | "opacityForeground";

export type PropertiesKeys = `${Properties}.${Shades}` | Properties;
