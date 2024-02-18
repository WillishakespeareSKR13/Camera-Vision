import { Shades } from "./shades";

export type Colors =
  | "blue"
  | "indigo"
  | "green"
  | "red"
  | "orange"
  | "rose"
  | "artic"
  | "gray"
  | "gold"
  | "white"
  | "black";

export type ColorsExtended = Colors | `#${string}`;

export type ColorsKeys = `${Colors}.${Shades}` | Colors;
