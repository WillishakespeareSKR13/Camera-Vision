import { Dimensions } from "react-native";

const size1 = "0.0625rem";
const size2 = "0.25rem";
const size3 = "0.5rem";
const size4 = "0.75rem";
const size5 = "0.875rem";
const size6 = "1rem";
const size7 = "1.25rem";
const size8 = "1.5rem";
const size9 = "2rem";

export const sizes = {
  vw: Dimensions.get("window").width,
  vh: Dimensions.get("window").height,

  xxxs: size1,
  xxs: size2,
  xs: size3,
  sm: size4,
  md: size5,
  lg: size6,
  xl: size7,
  xxl: size8,
  xxxl: size9,
};
