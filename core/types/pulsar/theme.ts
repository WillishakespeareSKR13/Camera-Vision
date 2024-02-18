import { PropertiesTheme } from "../../themes/propierties";
import { ShadowsTheme } from "../../themes/shadows";
import { tokens } from "../../tokens";

export type Tokens = typeof tokens;
export type Theme = ShadowsTheme & PropertiesTheme;
