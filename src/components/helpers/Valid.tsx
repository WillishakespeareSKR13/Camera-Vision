import { RC } from "../../types/react";

type Props = {
  isValid: boolean;
};

const Valid: RC<Props> = (props) => {
  const { isValid, children } = props;
  if (!isValid) return null;
  return children;
};

export default Valid;
