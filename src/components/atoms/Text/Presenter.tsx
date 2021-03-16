import { CSSProperties, FC } from "react";

export type Weight = "normal" | "bold";
export type Color =
  | "black"
  | "darkGray02"
  | "darkGray01"
  | "mediumGray02"
  | "mediumGray01"
  | "lightGray02"
  | "lightGray01"
  | "white"
  | "purple"
  | "blue"
  | "pink"
  | "cyan"
  | "yellow"
  | "red";

export type Size = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type Tag =
  | "a"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "div"
  | "p"
  | "abbr"
  | "b"
  | "cite"
  | "del"
  | "em"
  | "i"
  | "ins"
  | "kbd"
  | "mark"
  | "s"
  | "samp"
  | "span"
  | "sub"
  | "sup"
  | "u";

export type Props = {
  className?: string;

  color?: Color;
  size?: Size;
  style?: CSSProperties;
  tag?: Tag;
  weight?: Weight;
};

export const Presenter: FC<Props> = ({
  children,
  className,
  color,
  size = "md",
  tag = "p",
  weight = "normal",
  ...props
}) => {
  const Tag = tag;

  const baseClass = "whitespace-pre-wrap";

  let fontSizeClass = "";
  switch (size) {
    case "xxs":
      fontSizeClass = "text-xxs";
      break;
    case "xs":
      fontSizeClass = "text-xs";
      break;
    case "sm":
      fontSizeClass = "text-sm";
      break;
    case "md":
      fontSizeClass = "text-base";
      break;
    case "lg":
      fontSizeClass = "text-lg";
      break;
    case "xl":
      fontSizeClass = "text-xl";
      break;
    case "xxl":
      fontSizeClass = "text-2xl";
      break;
  }

  let fontWeightClass = "";
  switch (weight) {
    case "bold":
      fontWeightClass = "font-bold";
      break;
    case "normal":
      fontWeightClass = "font-medium";
      break;
  }

  let colorClass = "";
  switch (color) {
    case "black":
      colorClass = "text-black";
      break;
    case "darkGray02":
      colorClass = "text-gray-700";
      break;
    case "darkGray01":
      colorClass = "text-gray-600";
      break;
    case "mediumGray02":
      colorClass = "text-gray-500";
      break;
    case "mediumGray01":
      colorClass = "text-gray-400";
      break;
    case "lightGray02":
      colorClass = "text-gray-300";
      break;
    case "lightGray01":
      colorClass = "text-gray-200";
      break;
    case "white":
      colorClass = "text-white";
      break;
    case "purple":
      colorClass = "text-purple";
      break;
    case "cyan":
      colorClass = "text-cyan";
      break;
    case "pink":
      colorClass = "text-pink";
      break;
    case "yellow":
      colorClass = "text-yellow";
      break;
    case "red":
      colorClass = "text-red";
      break;
    case "blue":
      colorClass = "text-blue";
      break;
  }

  return (
    <Tag className={`${baseClass} ${fontSizeClass} ${fontWeightClass} ${colorClass} ${className}`} {...props}>
      {children}
    </Tag>
  );
};
