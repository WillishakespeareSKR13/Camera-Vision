import { ValidProps } from "./types";

export const Valid = (props: ValidProps) => {
  const { children, isValid } = props;
  if (!isValid) return null;
  return <>{children}</>;
};
