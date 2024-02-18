import { ColorsExtended } from "./colors";
import { Directions } from "./directions";
import { Shades } from "./shades";

export type Gradients = [ColorsExtended, ColorsExtended];
export type GradientsShades = [Shades, Shades];
export type GradientsDirections = `to ${Directions}` | `${number}deg`;
