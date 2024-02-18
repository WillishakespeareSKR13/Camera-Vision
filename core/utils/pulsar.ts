import { PulsarComponent } from "../types/pulsar";
import { tokens } from "../tokens";
import { Styles } from "../types/pulsar/styles";

export const Stylex = <P extends object>(style: Styles[], props?: P) => {
  const {
    className,
    stylex: stylexProps,
    style: styleProps,
  } = (props ?? {}) as PulsarComponent<P>;

  const pulsarStyles = Theme(stylexProps) as Styles[];
  const stylesx = propsStylex(
    style as StyleXStyles,
    pulsarStyles as StyleXStyles,
    styleProps as StyleXStyles
  );
  const newClassName = className
    ? `${stylesx.className} ${className}`
    : stylesx.className;

  const stylexWithClassName = {
    ...props,
    ...stylesx,
    className: newClassName,
  };

  return stylexWithClassName;
};

export const Theme = (pulsar: any): Styles[] => {
  const isFunction = typeof pulsar === "function";
  if (isFunction) return [pulsar(tokens)] as Styles[];
  const isObject = typeof pulsar === "object";
  if (isObject) return [pulsar] as Styles[];
  const isArray = Array.isArray(pulsar);
  if (isArray) return pulsar.map((n) => Theme(n)).flat() as Styles[];
  return [] as Styles[];
};

export const Props =
  <P extends object>(props: P, spreader?: (_: P) => P & { spread?: object }) =>
  (style: Styles[]) =>
    Stylex(style, props, spreader);

export const Pulsar = Object.assign(
  {},
  {
    Stylex,
    Theme,
    Props,
  }
);
