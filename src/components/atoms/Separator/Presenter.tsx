import { CSSProperties, VFC } from "react";

export type Props = {
  className?: string;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({ className, style }) => {
  return <hr className={`w-full bg-gray-200 ${className}`} style={{ height: 1, ...style }} />;
};
