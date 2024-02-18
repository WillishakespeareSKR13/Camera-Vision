import { Children } from "react";
import { InvertProps } from "./types";

export const Invert = (props: InvertProps) => {
  const { children, isInverted } = props;
  const arrayChildren = Children.toArray(children);
  return isInverted ? arrayChildren.reverse() : arrayChildren;
};
