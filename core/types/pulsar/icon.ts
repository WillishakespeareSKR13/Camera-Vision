import { Icons } from "../../assets/icons";

const { brands, regular, solid } = Icons;

export type IconsSVG = [
  width: number,
  height: number,
  paths: [number, string][],
  unicode: string,
  svgPathData: string
];

export type IconsVariant = "brands" | "regular" | "solid";

export type IconsName =
  | keyof typeof brands
  | keyof typeof regular
  | keyof typeof solid;

export type IconStringArray = IconsName | [IconsName, IconsName];

export type IconsFind = Record<IconsName, IconsSVG>;
