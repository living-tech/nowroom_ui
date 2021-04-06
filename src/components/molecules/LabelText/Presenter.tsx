import { CSSProperties, ReactNode, VFC } from "react";

import { Text } from "../../atoms/Text/Default";
import { Color as TextColor } from "../../atoms/Text/Presenter";

export type Color =
  | "pink"
  | "white"
  | "cyan"
  | "blue"
  | "purple"
  | "green"
  | "yellow"
  | "mediumGray01"
  | "lightGray02"
  | "blackOpacity";

export type Props = {
  children: ReactNode;
  className?: string;
  color?: Color;
  size?: "md" | "sm" | "xs";
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({ children, className, color = "purple", size = "md" }) => {
  const baseClass = "inline-flex items-center border rounded";

  let sizeClass = "";
  switch (size) {
    case "md":
      sizeClass = "py-1 px-1.5";
      break;
    case "sm":
      sizeClass = "py-1 px-1.5";
      break;
  }

  let backgroundColorClass = "";
  let borderColorClass = "";
  let textColor: TextColor = "white";
  switch (color) {
    case "purple":
      backgroundColorClass = "bg-purple";
      borderColorClass = "border-purple";
      textColor = "white";
      break;
    case "pink":
      backgroundColorClass = "bg-pink";
      borderColorClass = "border-pink";
      textColor = "white";
      break;
    case "cyan":
      backgroundColorClass = "bg-cyan";
      borderColorClass = "border-cyan";
      textColor = "white";
      break;
    case "blue":
      backgroundColorClass = "bg-blue";
      borderColorClass = "border-blue";
      textColor = "white";
      break;
    case "green":
      backgroundColorClass = "bg-green";
      borderColorClass = "border-green";
      textColor = "white";
      break;
    case "yellow":
      backgroundColorClass = "bg-yellow";
      borderColorClass = "border-yellow";
      textColor = "white";
      break;
    case "mediumGray01":
      backgroundColorClass = "bg-gray-400";
      borderColorClass = "border-gray-400";
      textColor = "white";
      break;
    case "lightGray02":
      backgroundColorClass = "bg-gray-300";
      borderColorClass = "border-gray-300";
      textColor = "white";
      break;
    case "white":
      backgroundColorClass = "bg-white";
      borderColorClass = "border-gray-200";
      textColor = "darkGray02";
      break;
    case "blackOpacity":
      backgroundColorClass = "bg-black-opacity";
      borderColorClass = "border-transparent";
      textColor = "white";
      break;
  }

  return (
    <div
      className={`${baseClass} ${sizeClass} ${backgroundColorClass} ${borderColorClass} ${className}`}
      style={{
        paddingTop: 5,
      }}
    >
      <Text className="leading-none" color={textColor} size={size === "md" ? "xs" : "xxs"} tag="span" weight={"bold"}>
        {children}
      </Text>
    </div>
  );
};
