export type RC<P = {}> = (
  props: P & {
    children?: React.ReactNode;
  }
) => React.JSX.Element | null | React.ReactNode;
