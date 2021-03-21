import { CSSProperties, FC } from "react";

import { Icon } from "../../atoms/Icon/Default";
import { IconName, Size } from "../../atoms/Icon/Presenter";
import { Spinner } from "../../atoms/Spinner/Default";

export type Props = {
  block?: boolean;
  className?: string;
  color?: "purple" | "white" | "mediumGray02";
  disabled?: boolean;
  iconName?: IconName;
  iconPosition?: "left" | "right";
  loading?: boolean;
  onClick?: () => void;
  padding?: boolean;
  shadow?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  style?: CSSProperties;
  type?: "button" | "submit";
  visualType?: "fill" | "outline";
};

export const Presenter: FC<Props> = ({
  block = false,
  children,
  className,
  color = "purple",
  disabled,
  iconName,
  iconPosition = "left",
  loading,
  padding = true,
  shadow = true,
  size = "md",
  style,
  type = "button",
  visualType = "fill",
  ...props
}) => {
  const baseClass =
    "relative rounded font-bold focus:outline-none transition duration-200 ease-out inline-flex disabled:cursor-not-allowed justify-center items-center";

  let sizeClass = "";
  let iconSize: Size;
  let loadingSize;
  switch (size) {
    case "sm":
      sizeClass = padding ? "py-2 px-6 text-sm" : "text-sm";
      iconSize = "sm";
      loadingSize = 18;
      break;
    case "md":
      sizeClass = padding ? "py-2.5 px-6 text-sm" : "text-sm";
      iconSize = "sm";
      loadingSize = 20;
      break;
    case "lg":
      sizeClass = padding ? "py-3.5 px-12 text-base" : "text-base";
      iconSize = "sm";
      loadingSize = 24;
      break;
    case "xl":
      sizeClass = padding ? "py-4 px-20 text-base" : "text-base";
      iconSize = "md";
      loadingSize = 24;
      break;
  }

  let loadingTextClass = "";
  if (loading) {
    loadingTextClass = "opacity-0";
  }

  let borderColorClass = "";
  switch (visualType) {
    case "fill":
      switch (color) {
        case "purple":
          borderColorClass = "border border-purple disabled:border-gray-500";
          break;
        case "white":
          borderColorClass = "border border-gray-200";
          break;
      }
      break;
    case "outline":
      switch (color) {
        case "purple":
          borderColorClass = "border border-purple disabled:border-gray-200";
          break;
        case "white":
          borderColorClass = "border border-gray-200";
          break;
      }
      break;
  }

  let backgroundColorClass = "";
  switch (visualType) {
    case "fill":
      switch (color) {
        case "purple":
          backgroundColorClass = "bg-purple hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
          break;
        case "white":
          backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
          break;
      }
      break;
    case "outline":
      switch (color) {
        case "purple":
          backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
          break;
        case "white":
          backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
          break;
      }
      break;
  }

  let textColorClass = "";
  switch (visualType) {
    case "fill":
      switch (color) {
        case "purple":
          textColorClass = "text-white hover:text-purple disabled:text-white disabled:hover:text-white";
          break;
        case "white":
          textColorClass = "text-black hover:text-white disabled:text-gray-200 disabled:hover:text-gray-200";
          break;
      }
      break;
    case "outline":
      switch (color) {
        case "purple":
          textColorClass = "text-purple hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
          break;
        case "white":
          textColorClass = "text-black hover:text-white disabled:text-gray-200 disabled:hover:text-gray-200";
          break;
      }
      break;
  }

  let blockClass = "";
  if (block) {
    blockClass = "w-full";
  }

  let shadowClass = "";
  if (shadow) {
    shadowClass = "shadow";
  }

  return (
    <button
      className={`${baseClass} ${sizeClass} ${borderColorClass} ${backgroundColorClass} ${textColorClass} ${blockClass} ${shadowClass} ${className}`}
      disabled={disabled || loading}
      style={style}
      type={type}
      {...props}
    >
      <span className={`flex items-center ${loadingTextClass}`}>
        {iconName && iconPosition === "left" && (
          <span className={"mr-2"}>
            <Icon name={iconName} size={iconSize} />
          </span>
        )}
        {children}
        {iconName && iconPosition === "right" && (
          <span className={"ml-2"}>
            <Icon name={iconName} size={iconSize} />
          </span>
        )}
      </span>
      {loading && (
        <span className="top-1/2 absolute flex transform -translate-y-1/2">
          <Spinner size={loadingSize} />
        </span>
      )}
    </button>
  );
};