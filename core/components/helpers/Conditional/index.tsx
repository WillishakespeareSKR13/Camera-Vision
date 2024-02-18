import { Children } from "react";
import { ConditionalProps } from "./types";

export const Conditional = (props: ConditionalProps) => {
  const { children, isConditional } = props;
  const arrayChildren = Children.toArray(children);
  return isConditional ? arrayChildren[0] : arrayChildren[1];
};
