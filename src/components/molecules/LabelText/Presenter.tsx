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
  isClickable?: boolean;
  size?: "md" | "sm" | "xs";
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({
  children,
  className,
  color = "purple",
  isClickable = false,
  size = "md",
  style,
}) => {
  const baseClass = "inline-flex items-center border rounded transition ease-out duration-200";

  let cursorClass = "";
  if (isClickable) {
    cursorClass = "cursor-pointer";
  }

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
  let backgroundColorHoverClass = "";
  let borderColorHoverClass = "";
  let textColor: TextColor = "white";
  switch (color) {
    case "purple":
      backgroundColorClass = "bg-purple";
      borderColorClass = "border-purple";
      backgroundColorHoverClass = isClickable ? "hover:bg-purple-700" : "";
      borderColorHoverClass = isClickable ? "hover:border-purple-700" : "";
      textColor = "white";
      break;
    case "pink":
      backgroundColorClass = "bg-pink";
      borderColorClass = "border-pink";
      backgroundColorHoverClass = isClickable ? "hover:bg-pink-700" : "";
      borderColorHoverClass = isClickable ? "hover:border-pink-700" : "";
      textColor = "white";
      break;
    case "cyan":
      backgroundColorClass = "bg-cyan";
      borderColorClass = "border-cyan";
      backgroundColorHoverClass = isClickable ? "hover:bg-cyan-700" : "";
      borderColorHoverClass = isClickable ? "hover:border-cyan-700" : "";
      textColor = "white";
      break;
    case "blue":
      backgroundColorClass = "bg-blue";
      borderColorClass = "border-blue";
      backgroundColorHoverClass = isClickable ? "hover:bg-blue-700" : "";
      borderColorHoverClass = isClickable ? "hover:border-blue-700" : "";
      textColor = "white";
      break;
    case "green":
      backgroundColorClass = "bg-green";
      borderColorClass = "border-green";
      backgroundColorHoverClass = isClickable ? "hover:bg-green-700" : "";
      borderColorHoverClass = isClickable ? "hover:border-green-700" : "";
      textColor = "white";
      break;
    case "yellow":
      backgroundColorClass = "bg-yellow";
      borderColorClass = "border-yellow";
      backgroundColorHoverClass = isClickable ? "hover:bg-yellow-700" : "";
      borderColorHoverClass = isClickable ? "hover:border-yellow-700" : "";
      textColor = "white";
      break;
    case "mediumGray01":
      backgroundColorClass = "bg-gray-400";
      borderColorClass = "border-gray-400";
      backgroundColorHoverClass = isClickable ? "hover:bg-gray-600" : "";
      borderColorHoverClass = isClickable ? "hover:border-gray-600" : "";
      textColor = "white";
      break;
    case "lightGray02":
      backgroundColorClass = "bg-gray-300";
      borderColorClass = "border-gray-300";
      backgroundColorHoverClass = isClickable ? "hover:bg-gray-500" : "";
      borderColorHoverClass = isClickable ? "hover:border-gray-500" : "";
      textColor = "white";
      break;
    case "white":
      backgroundColorClass = "bg-white";
      borderColorClass = "border-gray-200";
      backgroundColorHoverClass = isClickable ? "hover:bg-gray-200" : "";
      borderColorHoverClass = isClickable ? "hover:border-gray-200" : "";
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
      className={`${baseClass} ${cursorClass} ${sizeClass} ${backgroundColorClass} ${backgroundColorHoverClass} ${borderColorClass} ${borderColorHoverClass}  ${className}`}
      style={style}
    >
      <Text className=" leading-none" color={textColor} size={size === "md" ? "xs" : "xxs"} tag="span" weight={"bold"}>
        {children}
      </Text>
    </div>
  );
};
