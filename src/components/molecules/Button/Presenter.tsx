import { CSSProperties, ReactNode, VFC } from "react";

import { Icon } from "../../atoms/Icon/Default";
import { IconName, Size } from "../../atoms/Icon/Presenter";
import { Spinner } from "../../atoms/Spinner/Default";

export type Props = {
  block?: boolean;
  border?: boolean;
  children: ReactNode;
  className?: string;
  color?: "purple" | "white" | "mediumGray02" | "red";
  disabled?: boolean;
  href?: string;
  iconName?: IconName;
  iconPosition?: "left" | "right";
  loading?: boolean;
  onClick?: () => void;
  padding?: boolean;
  radius?: boolean;
  shadow?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  style?: CSSProperties;
  tag?: "button" | "a";
  target?: "_blank";
  type?: "button" | "submit";
  visualType?: "fill" | "outline";
};

export const Presenter: VFC<Props> = ({
  block = false,
  border = true,
  children,
  className = "",
  color = "purple",
  disabled,
  href,
  iconName,
  iconPosition = "left",
  loading,
  onClick,
  padding = true,
  radius = true,
  shadow = true,
  size = "md",
  style,
  tag = "button",
  target,
  type = "button",
  visualType = "fill",
  ...props
}) => {
  const baseClass =
    "relative cursor-pointer font-bold focus:outline-none transition duration-200 ease-out inline-flex disabled:cursor-not-allowed justify-center items-center";

  let sizeClass = "";
  let iconSize: Size;
  let loadingSize: number;
  let spaceXSize;
  switch (size) {
    case "xs":
      sizeClass = padding ? "py-2 px-2 text-xs" : "text-xs";
      spaceXSize = 1;
      iconSize = 14;
      loadingSize = 18;
      break;
    case "sm":
      sizeClass = padding ? "py-2 px-6 text-sm" : "text-sm";
      spaceXSize = 2;
      iconSize = "sm";
      loadingSize = 18;
      break;
    case "md":
      sizeClass = padding ? "py-2.5 px-6 text-sm" : "text-sm";
      spaceXSize = 2;
      iconSize = "sm";
      loadingSize = 20;
      break;
    case "lg":
      sizeClass = padding ? "py-3 px-8 text-base" : "text-base";
      spaceXSize = 2;
      iconSize = "sm";
      loadingSize = 24;
      break;
    case "xl":
      sizeClass = padding ? "py-4 px-10 text-base" : "text-base";
      spaceXSize = 2;
      iconSize = "md";
      loadingSize = 24;
      break;
  }

  let loadingTextClass = "";
  if (loading) {
    loadingTextClass = "opacity-0";
  }

  let roundedClass = "";
  if (radius) {
    roundedClass = "rounded";
  }

  let borderColorClass = "";
  switch (visualType) {
    case "fill":
      switch (color) {
        case "purple":
          borderColorClass = border
            ? "border border-purple disabled:border-gray-500"
            : "border border-transparent disabled:border-transparent";
          break;
        case "white":
          borderColorClass = border ? "border border-gray-200" : "border border-transparent";
          break;
        case "red":
          borderColorClass = border
            ? "border border-red disabled:border-gray-500"
            : "border border-transparent disabled:border-transparent";
          break;
      }
      break;
    case "outline":
      switch (color) {
        case "purple":
          borderColorClass = border
            ? "border border-purple disabled:border-gray-200"
            : "border border-transparent disabled:border-transparent";
          break;
        case "white":
          borderColorClass = border ? "border border-gray-200" : "border border-transparent";
          break;
        case "red":
          borderColorClass = border
            ? "border border-red disabled:border-gray-200"
            : "border border-transparent disabled:border-transparent";
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
        case "red":
          backgroundColorClass = "bg-red hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
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
        case "red":
          backgroundColorClass = "bg-white hover:bg-red disabled:bg-white disabled:hover:bg-white";
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
        case "red":
          textColorClass = "text-white hover:text-red disabled:text-white disabled:hover:text-white";
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
        case "red":
          textColorClass = "text-red hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
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
    shadowClass = "shadow-xs";
  }

  const Inner = () => (
    <>
      <span className={`flex items-center ${loadingTextClass}`}>
        {iconName && iconPosition === "left" && (
          <span className={`relative mr-${spaceXSize}`}>
            <Icon name={iconName} size={iconSize} />
          </span>
        )}
        {children}
        {iconName && iconPosition === "right" && (
          <span className={`relative ml-${spaceXSize}`}>
            <Icon name={iconName} size={iconSize} />
          </span>
        )}
      </span>
      {loading && (
        <span className="absolute flex top-1/2 transform -translate-y-1/2">
          <Spinner size={loadingSize} />
        </span>
      )}
    </>
  );

  if (tag === "a") {
    return (
      <a
        className={`${baseClass} ${sizeClass} ${roundedClass} ${borderColorClass} ${backgroundColorClass} ${textColorClass} ${blockClass} ${shadowClass} ${className}`}
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
        className={`${baseClass} ${sizeClass} ${roundedClass} ${borderColorClass} ${backgroundColorClass} ${textColorClass} ${blockClass} ${shadowClass} ${className}`}
        disabled={disabled || loading}
        onClick={onClick}
        style={style}
        type={type}
        {...props}
      >
        <Inner />
      </button>
    );
  }
};
