import { CSSProperties, VFC } from "react";

import { TextDarkGray01 } from "../../atoms/Text/DarkGray01";

export type Props = {
  className?: string;
  content: () => JSX.Element;
  justify?: "left" | "space-between";
  leftWidth?: number;
  style?: CSSProperties;
  title: string;
};

export const Presenter: VFC<Props> = ({ className, content, justify = "left", leftWidth = 64, style, title }) => {
  let containerClass = "";
  switch (justify) {
    case "left":
      break;
    case "space-between":
      containerClass = "justify-between";
      break;
  }

  let rightColumnClass = "";
  switch (justify) {
    case "left":
      rightColumnClass = "flex-grow";
      break;
    case "space-between":
      break;
  }

  return (
    <div className={`flex items-center px-4 border-b border-gray-200 ${containerClass} ${className}`} style={style}>
      <div className="py-3" style={{ width: justify === "left" ? leftWidth : undefined }}>
        <TextDarkGray01 size={"xs"}>{title}</TextDarkGray01>
      </div>
      <div className={`py-3 ml-4 ${rightColumnClass}`}>{content()}</div>
    </div>
  );
};
