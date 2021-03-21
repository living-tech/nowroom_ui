import { CSSProperties, ReactNode, VFC } from "react";

export type Props = {
  children: ReactNode;
  className?: string;
  isShowBorderBottom?: boolean;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({ children, className, isShowBorderBottom = true, style }) => {
  let borderClass = "";
  if (isShowBorderBottom) {
    borderClass = "border-b";
  }

  return (
    <td className={`align-middle px-4 py-3 text-left border-gray-200 ${borderClass} ${className}`} style={style}>
      {children}
    </td>
  );
};
