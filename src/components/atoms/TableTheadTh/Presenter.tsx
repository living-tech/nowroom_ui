import { CSSProperties, FC } from "react";

import { TextDarkGray01 } from "../Text/DarkGray01";

export type Props = {
  className?: string;
  style?: CSSProperties;
  title?: string;
};

export const Presenter: FC<Props> = ({ className, style, title }) => {
  return (
    <th className={`px-4 py-3 text-left border-b border-gray-200 ${className}`} style={style}>
      {title && <TextDarkGray01 size={"xs"}>{title}</TextDarkGray01>}
    </th>
  );
};
