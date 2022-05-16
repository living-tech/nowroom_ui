import { CSSProperties, ReactNode, VFC } from "react";

import styles from "./LabelText.module.scss";

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
  | "blackOpacity"
  | "red"
  | "purpleOutline";

export type TextColor = "text-white" | "text-gray-700" | "text-purple";

export type Props = {
  children: ReactNode;
  className?: string;
  color?: Color;
  colorDense?: number;
  isClickable?: boolean;
  size?: "md" | "sm" | "xs";
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({
  children,
  className,
  color = "purple",
  colorDense = 500,
  isClickable = false,
  size = "md",
  style,
}) => {
  const baseClass =
    "inline-flex items-center border rounded transition ease-out duration-200 font-bold leading-none whitespace-pre-wrap pb-1 px-1.5";

  let cursorClass = "";
  if (isClickable) {
    cursorClass = "cursor-pointer";
  }

  let fontSize = "";
  switch (size) {
    case "md":
      fontSize = "text-xs";
      break;
    case "sm":
      fontSize = "text-xxs";
      break;
    case "xs":
      fontSize = "text-xxs";
      break;
  }

  let backgroundColorClass = "";
  let borderColorClass = "";
  let backgroundColorHoverClass = "";
  let borderColorHoverClass = "";
  let textColor: TextColor = "text-white";
  switch (color) {
    case "purple":
      backgroundColorClass = "bg-purple";
      borderColorClass = "border-purple";
      backgroundColorHoverClass = isClickable ? "hover:bg-purple-700" : "";
      borderColorHoverClass = isClickable ? "hover:border-purple-700" : "";
      textColor = "text-white";
      break;
    case "pink":
      backgroundColorClass = "bg-pink";
      borderColorClass = "border-pink";
      backgroundColorHoverClass = isClickable ? "hover:bg-pink-700" : "";
      borderColorHoverClass = isClickable ? "hover:border-pink-700" : "";
      textColor = "text-white";
      break;
    case "cyan":
      backgroundColorClass = "bg-cyan";
      borderColorClass = "border-cyan";
      backgroundColorHoverClass = isClickable ? "hover:bg-cyan-700" : "";
      borderColorHoverClass = isClickable ? "hover:border-cyan-700" : "";
      textColor = "text-white";
      break;
    case "blue":
      backgroundColorClass = "bg-blue";
      borderColorClass = "border-blue";
      backgroundColorHoverClass = isClickable ? "hover:bg-blue-700" : "";
      borderColorHoverClass = isClickable ? "hover:border-blue-700" : "";
      textColor = "text-white";
      break;
    case "green":
      backgroundColorClass = "bg-green";
      borderColorClass = "border-green";
      backgroundColorHoverClass = isClickable ? "hover:bg-green-700" : "";
      borderColorHoverClass = isClickable ? "hover:border-green-700" : "";
      textColor = "text-white";
      break;
    case "yellow":
      backgroundColorClass = "bg-yellow";
      borderColorClass = "border-yellow";
      backgroundColorHoverClass = isClickable ? "hover:bg-yellow-700" : "";
      borderColorHoverClass = isClickable ? "hover:border-yellow-700" : "";
      textColor = "text-white";
      break;
    case "mediumGray01":
      backgroundColorClass = "bg-gray-400";
      borderColorClass = "border-gray-400";
      backgroundColorHoverClass = isClickable ? "hover:bg-gray-600" : "";
      borderColorHoverClass = isClickable ? "hover:border-gray-600" : "";
      textColor = "text-white";
      break;
    case "lightGray02":
      backgroundColorClass = "bg-gray-300";
      borderColorClass = "border-gray-300";
      backgroundColorHoverClass = isClickable ? "hover:bg-gray-500" : "";
      borderColorHoverClass = isClickable ? "hover:border-gray-500" : "";
      textColor = "text-white";
      break;
    case "red":
      backgroundColorClass = "bg-red";
      borderColorClass = "border-red";
      backgroundColorHoverClass = isClickable ? "hover:bg-red-700" : "";
      borderColorHoverClass = isClickable ? "hover:border-red-700" : "";
      textColor = "text-white";
      break;
    case "white":
      backgroundColorClass = "bg-white";
      borderColorClass = "border-gray-200";
      backgroundColorHoverClass = isClickable ? "hover:bg-gray-200" : "";
      borderColorHoverClass = isClickable ? "hover:border-gray-200" : "";
      textColor = "text-gray-700";
      break;
    case "blackOpacity":
      backgroundColorClass = "bg-black-opacity";
      borderColorClass = "border-transparent";
      textColor = "text-white";
      break;
    case "purpleOutline":
      backgroundColorClass = "bg-transparent";
      borderColorClass = "border-purple";
      textColor = "text-purple";
      break;
  }

  backgroundColorClass = colorDense ? `${backgroundColorClass}-${colorDense}` : backgroundColorClass;
  borderColorClass = colorDense ? `${borderColorClass}-${colorDense}` : borderColorClass;

  return (
    <div
      className={`${baseClass} ${cursorClass} ${fontSize} ${backgroundColorClass} ${backgroundColorHoverClass} ${borderColorClass} ${textColor} ${borderColorHoverClass} ${className} ${styles.divStyle}`}
      style={style}
    >
      {children}
    </div>
  );
};
