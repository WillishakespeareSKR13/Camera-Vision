import { ReactNode, cloneElement } from "react";

type Props = {
  children: ReactNode;
} & Record<string, unknown>;

export const Clone = (props: Props) => {
  const { children, ...rest } = props;
  const element = children as React.ReactElement;
  const clone = cloneElement(element, {
    ...element.props,
    ...rest,
  });
  return clone;
};
