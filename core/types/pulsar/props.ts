import { ColorsExtended } from "./colors";
import { Gradients, GradientsDirections, GradientsShades } from "./gradients";
import { IconsName, IconsVariant } from "./icon";
import { Properties } from "./propierties";
import { Shades } from "./shades";
import { Size } from "./size";
import { Variants } from "./variants";

export type VariantsProps = {
  variant?: Variants;
};

export type ColorsProps = {
  color?: ColorsExtended;
  shade?: Shades;
};

export type ThemeColorsProps = {
  theme?: Properties;
  shade?: Shades;
};

export type GradientsProps = {
  gradient?: Gradients;
  gradientShades?: GradientsShades;
  gradientDirection?: GradientsDirections;
};

export type AppearanceProps = ColorsProps & GradientsProps & VariantsProps;

export type SizeProps = {
  size?: Size;
  width?: number | string;
  height?: number | string;
};

export type GetSizeProps = {
  width?: number | string;
  height?: number | string;
};

export type IconsProps = {
  fill?: string;
  iconVariant?: IconsVariant;
  icon?: IconsName;
} & SizeProps;

export type ContentProps = {
  title?: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  leftContent?: React.ReactNode | string;
  rightContent?: React.ReactNode | string;
  content?: React.ReactNode | string;

  subcontent?: React.ReactNode | string;

  upperContent?: React.ReactNode | string;
  lowerContent?: React.ReactNode | string;
};
