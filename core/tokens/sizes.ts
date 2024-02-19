import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const remToNumber = (rem: number) => (rem * 16) / width;

const size1 = remToNumber(0.0625);
const size2 = remToNumber(0.25);
const size3 = remToNumber(0.5);
const size4 = remToNumber(0.75);
const size5 = remToNumber(0.875);
const size6 = remToNumber(1);
const size7 = remToNumber(1.25);
const size8 = remToNumber(1.5);
const size9 = remToNumber(2);

export const sizes = {
  vw: width,
  vh: height,

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
