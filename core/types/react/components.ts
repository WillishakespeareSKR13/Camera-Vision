export type RC<P = {}> = (
  _props: P & {
    children?: React.ReactNode;
  }
) => JSX.Element;
