import { CSSProperties, VFC } from "react";

import { Icon } from "../../atoms/Icon/Default";
import { Color as IconColor, IconName, Size } from "../../atoms/Icon/Presenter";

export type Color = "purple" | "yellow" | "red" | "white" | "transparent";

export type Props = {
  border?: boolean;
  className?: string;
  color?: Color;
  disabled?: boolean;
  href?: string;
  iconColor?: IconColor;
  iconName: IconName;
  onClick?: () => void;
  radius?: boolean;
  shadow?: boolean;
  size?: "sm" | "md" | "lg";
  style?: CSSProperties;
  tag?: "button" | "a";
  target?: "_blank";
  visualType?: "fill" | "outline";
};

export const Presenter: VFC<Props> = ({
  border = true,
  className,
  color = "transparent",
  disabled,
  href,
  iconColor,
  iconName,
  radius = false,
  shadow = true,
  size = "md",
  style,
  tag = "button",
  target,
  visualType = "fill",
  ...props
}) => {
  const baseClass =
    "rounded font-bold transition duration-200 ease-out inline-flex disabled:cursor-not-allowed justify-center items-center focus:outline-none";

  let sizeClass = "";
  let iconSize: Size;
  switch (size) {
    case "sm":
      sizeClass = "p-1";
      iconSize = "sm";
      break;
    case "md":
      sizeClass = "p-2";
      iconSize = "md";
      break;
    case "lg":
      sizeClass = "p-4";
      iconSize = "lg";
      break;
  }

  let borderRadiusClass = "";
  if (radius) {
    borderRadiusClass = "rounded-full";
  }

  let borderColorClass = "";
  if (border) {
    switch (visualType) {
      case "fill":
        switch (color) {
          case "purple":
            borderColorClass = "border border-purple disabled:border-gray-500";
            break;
          case "yellow":
            borderColorClass = "border border-yellow disabled:border-gray-500";
            break;
          case "red":
            borderColorClass = "border border-red disabled:border-gray-500";
            break;
          case "white":
            borderColorClass = "border border-gray-200 hover:border-purple";
            break;
          case "transparent":
            borderColorClass = "border border-transparent";
            break;
        }
        break;
      case "outline":
        switch (color) {
          case "purple":
            borderColorClass = "border border-purple disabled:border-gray-200";
            break;
          case "yellow":
            borderColorClass = "border border-yellow disabled:border-gray-200";
            break;
          case "red":
            borderColorClass = "border border-red disabled:border-gray-200";
            break;
          case "white":
            borderColorClass = "border border-gray-200 hover:border-purple";
            break;
          case "transparent":
            borderColorClass = "border border-transparent";
            break;
        }
        break;
    }
  }

  let backgroundColorClass = "";
  switch (visualType) {
    case "fill":
      switch (color) {
        case "purple":
          backgroundColorClass = "bg-purple hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
          break;
        case "yellow":
          backgroundColorClass = "bg-yellow hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
          break;
        case "red":
          backgroundColorClass = "bg-red hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
          break;
        case "white":
          backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
          break;
        case "transparent":
          backgroundColorClass = "bg-transparent hover:bg-gray-200";
          break;
      }
      break;
    case "outline":
      switch (color) {
        case "purple":
          backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
          break;
        case "yellow":
          backgroundColorClass = "bg-white hover:bg-yellow disabled:bg-white disabled:hover:bg-white";
          break;
        case "red":
          backgroundColorClass = "bg-white hover:bg-red disabled:bg-white disabled:hover:bg-white";
          break;
        case "white":
          backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
          break;
        case "transparent":
          backgroundColorClass = "bg-transparent hover:bg-gray-200";
          break;
      }
      break;
  }

  let iconColorClass = "";
  switch (visualType) {
    case "fill":
      switch (color) {
        case "purple":
          iconColorClass = "text-white hover:text-purple disabled:text-white disabled:hover:text-white";
          break;
        case "yellow":
          iconColorClass = "text-white hover:text-yellow disabled:text-white disabled:hover:text-white";
          break;
        case "red":
          iconColorClass = "text-white hover:text-red disabled:text-white disabled:hover:text-white";
          break;
        case "white":
          iconColorClass = "text-black hover:text-white disabled:text-gray-200 disabled:hover:text-gray-200";
          break;
        case "transparent":
          iconColorClass = "text-black";
          break;
      }
      break;
    case "outline":
      switch (color) {
        case "purple":
          iconColorClass = "text-purple hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
          break;
        case "yellow":
          iconColorClass = "text-yellow hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
          break;
        case "red":
          iconColorClass = "text-red hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
          break;
        case "white":
          iconColorClass = "text-black hover:text-white disabled:text-gray-200 disabled:hover:text-gray-200";
          break;
        case "transparent":
          iconColorClass = "text-black";
          break;
      }
      break;
  }

  let shadowClass = "";
  if (shadow) {
    shadowClass = "shadow";
  }

  const Inner = () => <Icon color={iconColor} name={iconName} size={iconSize} />;

  if (tag === "a") {
    return (
      <a
        className={`${baseClass} ${sizeClass} ${borderRadiusClass} ${borderColorClass} ${backgroundColorClass} ${iconColorClass} ${shadowClass} ${className}`}
        href={href}
        style={style}
        target={target}
        {...props}
      >
        <Inner />
      </a>
    );
  } else {
    return (
      <button
        className={`${baseClass} ${sizeClass} ${borderRadiusClass} ${borderColorClass} ${backgroundColorClass} ${iconColorClass} ${shadowClass} ${className}`}
        disabled={disabled}
        style={style}
        type="button"
        {...props}
      >
        <Inner />
      </button>
    );
  }
};
