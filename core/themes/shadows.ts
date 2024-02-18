import { ShadowsKeys } from "../types/pulsar";

export type ShadowsTheme = Record<ShadowsKeys, string>;

const dark: ShadowsTheme = {
  outer: "0 0 2px 0 #ffffff21",
  "outer.100": "0 0 2px 0 #ffffff17",
  "outer.200": "0 0 2px 0 #ffffff1a",
  "outer.300": "0 0 2px 0 #ffffff1c",
  "outer.400": "0 0 2px 0 #ffffff38",
  "outer.500": "0 0 2px 0 #ffffff21",
  "outer.600": "0 0 2px 0 #ffffff24",
  "outer.700": "0 0 2px 0 #ffffff26",
  "outer.800": "0 0 2px 0 #ffffff29",
  "outer.900": "0 0 2px 0 #ffffff2b",

  inner: "inset 0 0 2px 0 #00000021",
  "inner.100": "inset 0 0 2px 0 #00000017",
  "inner.200": "inset 0 0 2px 0 #0000001a",
  "inner.300": "inset 0 0 2px 0 #0000001c",
  "inner.400": "inset 0 0 2px 0 #0000001f",
  "inner.500": "inset 0 0 2px 0 #00000021",
  "inner.600": "inset 0 0 2px 0 #00000024",
  "inner.700": "inset 0 0 2px 0 #00000026",
  "inner.800": "inset 0 0 2px 0 #00000029",
  "inner.900": "inset 0 0 2px 0 #0000002b",
};

const light: ShadowsTheme = {
  outer: "0 0 2px 0 #00000021",
  "outer.100": "0 0 2px 0 #00000017",
  "outer.200": "0 0 2px 0 #0000001a",
  "outer.300": "0 0 2px 0 #0000001c",
  "outer.400": "0 0 2px 0 #0000001f",
  "outer.500": "0 0 2px 0 #00000021",
  "outer.600": "0 0 2px 0 #00000024",
  "outer.700": "0 0 2px 0 #00000026",
  "outer.800": "0 0 2px 0 #00000029",
  "outer.900": "0 0 2px 0 #0000002b",

  inner: "inset 0 0 2px 0 #ffffff21",
  "inner.100": "inset 0 0 2px 0 #ffffff17",
  "inner.200": "inset 0 0 2px 0 #ffffff1a",
  "inner.300": "inset 0 0 2px 0 #ffffff1c",
  "inner.400": "inset 0 0 2px 0 #ffffff1f",
  "inner.500": "inset 0 0 2px 0 #ffffff21",
  "inner.600": "inset 0 0 2px 0 #ffffff24",
  "inner.700": "inset 0 0 2px 0 #ffffff26",
  "inner.800": "inset 0 0 2px 0 #ffffff29",
  "inner.900": "inset 0 0 2px 0 #ffffff2b",
};

export const shadowsTheme = {
  dark,
  light,
};
