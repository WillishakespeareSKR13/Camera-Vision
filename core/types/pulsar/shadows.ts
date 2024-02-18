import { Shades } from "./shades";

export type Shadows = "outer" | "inner";

export type ShadowsKeys = `${Shadows}.${Shades}` | Shadows;
