import { pulsar } from "@core/utils/pulsar";
import { TouchableProps } from "./types";

export const Styles = pulsar.props<TouchableProps>((props) => {
  const { variant = "primary", disabled } = props;
  const styles = [
    css.base,
    css.withTheme,
    css.props,
    variants[variant],
    disabled && css.disabled,
  ];
  return styles;
});

const css = pulsar.create({
  base: {
    width: 100,
    height: 100,
  },
  disabled: {
    opacity: 0.5,
  },
  withTheme: ({ theme }) => ({
    backgroundColor: theme?.background,
  }),
  props: (props: TouchableProps) => ({
    width: "100%",
    height: "100%",
  }),
});

const variants = pulsar.create({
  primary: {
    backgroundColor: "red",
  },
  secondary: {
    backgroundColor: "blue",
  },
});
