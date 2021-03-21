import { CSSProperties, ReactNode, VFC } from "react";

export type Color = "purple" | "red" | "yellow";
export type Size = "md" | "sm";

export type Props = {
  border?: boolean;
  children: ReactNode;
  className?: string;
  color?: Color;
  size?: Size;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({ border = true, children, className, color = "purple", size = "md", style }) => {
  const baseClass = "rounded-md";

  let sizeClass = "";
  switch (size) {
    case "md":
      sizeClass = "p-4";
      break;
    case "sm":
      sizeClass = "p-3";
      break;
    default:
  }

  let backgroundColorClass = "";
  switch (color) {
    case "purple":
      backgroundColorClass = "bg-purple-100";
      break;
    case "red":
      backgroundColorClass = "bg-red-100";
      break;
    case "yellow":
      backgroundColorClass = "bg-yellow-100";
      break;
    default:
  }

  let borderClass = "";
  if (border) {
    borderClass = "border";
  }

  let borderColorClass;
  switch (color) {
    case "purple":
      borderColorClass = "border-purple";
      break;
    case "red":
      borderColorClass = "border-red";
      break;
    case "yellow":
      borderColorClass = "border-yellow";
      break;
    default:
  }

  return (
    <div
      className={`${borderClass} ${borderColorClass} ${backgroundColorClass} ${sizeClass} ${baseClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
