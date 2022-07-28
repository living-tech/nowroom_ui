import { CSSProperties, VFC } from "react";

import { Icon } from "../../atoms/Icon/Default";
import { Color as IconColor, CurrentType, IconName, Size as IconSize } from "../../atoms/Icon/Presenter";
import { Spinner } from "../../atoms/Spinner/Default";

export type Color =
  | "purple"
  | "yellow"
  | "red"
  | "white"
  | "transparent"
  | "facebook"
  | "twitter"
  | "line"
  | "gray"
  | "mediumGray01";
export type Size = "xs" | "sm" | "md" | "lg";

export type Props = {
  border?: boolean;
  className?: string;
  color?: Color;
  currentType?: CurrentType;
  disabled?: boolean;
  href?: string;
  iconColor?: IconColor;
  iconName: IconName;
  loading?: boolean;
  onClick?: () => void;
  radius?: boolean;
  shadow?: boolean;
  size?: Size;
  strokeWidth?: number;
  style?: CSSProperties;
  tag?: "button" | "a";
  target?: "_blank";
  visualType?: "fill" | "outline";
};

export const Presenter: VFC<Props> = ({
  border = true,
  className,
  color = "transparent",
  currentType,
  disabled,
  href,
  iconColor,
  iconName,
  loading,
  radius = false,
  shadow = true,
  size = "md",
  strokeWidth,
  style,
  tag = "button",
  target,
  visualType = "fill",
  ...props
}) => {
  const baseClass =
    "relative rounded font-bold transition duration-200 ease-out inline-flex disabled:cursor-not-allowed justify-center items-center focus:outline-none";

  let sizeClass = "";
  let iconSize: IconSize;
  let loadingSize: number;

  const iconStyle: CSSProperties | undefined = strokeWidth
    ? {
        strokeWidth: strokeWidth,
      }
    : undefined;

  switch (size) {
    case "xs":
      sizeClass = "w-4 h-4";
      iconSize = "xs";
      loadingSize = 10;
      break;
    case "sm":
      sizeClass = "p-1";
      iconSize = "sm";
      loadingSize = 14;
      break;
    case "md":
      sizeClass = "p-2";
      iconSize = "md";
      loadingSize = 20;
      break;
    case "lg":
      sizeClass = "p-2";
      iconSize = "lg";
      loadingSize = 26;
      break;
  }

  let loadingIconColorClass = "";
  if (loading) {
    loadingIconColorClass = "opacity-0";
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
          case "facebook":
            borderColorClass = "border border-facebook disabled:border-gray-500";
            break;
          case "twitter":
            borderColorClass = "border border-twitter disabled:border-gray-500";
            break;
          case "line":
            borderColorClass = "border border-line disabled:border-gray-500";
            break;
          case "white":
            borderColorClass = "border border-gray-200 hover:border-purple";
            break;
          case "gray":
            borderColorClass = "border border-gray-200 disabled:border-gray-200";
            break;
          case "transparent":
            borderColorClass = "border border-transparent";
            break;
        }
        break;
      case "outline":
        switch (color) {
          case "purple":
            borderColorClass = "border border-purple";
            break;
          case "yellow":
            borderColorClass = "border border-yellow";
            break;
          case "red":
            borderColorClass = "border border-red";
            break;
          case "facebook":
            borderColorClass = "border border-facebook";
            break;
          case "twitter":
            borderColorClass = "border border-twitter";
            break;
          case "line":
            borderColorClass = "border border-line";
            break;
          case "white":
            borderColorClass = "border border-gray-200 hover:border-purple";
            break;
          case "gray":
            borderColorClass = "border border-gray-200";
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
        case "facebook":
          backgroundColorClass = "bg-facebook hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
          break;
        case "twitter":
          backgroundColorClass = "bg-twitter hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
          break;
        case "line":
          backgroundColorClass = "bg-line hover:bg-white disabled:bg-gray-500 disabled:hover:bg-gray-500";
          break;
        case "white":
          backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
          break;
        case "gray":
          backgroundColorClass = "bg-white hover:bg-white";
          break;
        case "mediumGray01":
          backgroundColorClass = "bg-white hover:bg-white";
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
        case "facebook":
          backgroundColorClass = "bg-white hover:bg-facebook disabled:hover:bg-white";
          break;
        case "twitter":
          backgroundColorClass = "bg-white hover:bg-twitter disabled:hover:bg-white";
          break;
        case "line":
          backgroundColorClass = "bg-white hover:bg-line disabled:hover:bg-white";
          break;
        case "white":
          backgroundColorClass = "bg-white hover:bg-purple disabled:bg-white disabled:hover:bg-white";
          break;
        case "gray":
          backgroundColorClass = "bg-gray-500 hover:bg-gray-400 disabled:bg-gray-500 disabled:hover:bg-gray-500";
          break;
        case "mediumGray01":
          backgroundColorClass = "bg-gray-400 hover:bg-gray-300 disabled:bg-gray-400 disabled:hover:bg-gray-400";
          break;
        case "transparent":
          backgroundColorClass = "bg-transparent hover:bg-gray-200";
          break;
      }
      break;
  }

  let iconColorClass = "";
  let loadingColor;
  switch (visualType) {
    case "fill":
      switch (color) {
        case "purple":
          iconColorClass = "text-white hover:text-purple disabled:text-white disabled:hover:text-white";
          loadingColor = "white";
          break;
        case "yellow":
          iconColorClass = "text-white hover:text-yellow disabled:text-white disabled:hover:text-white";
          loadingColor = "white";
          break;
        case "red":
          iconColorClass = "text-white hover:text-red disabled:text-white disabled:hover:text-white";
          loadingColor = "white";
          break;
        case "facebook":
          iconColorClass = "text-white hover:text-facebook disabled:text-white disabled:hover:text-white";
          loadingColor = "white";
          break;
        case "twitter":
          iconColorClass = "text-white hover:text-twitter disabled:text-white disabled:hover:text-white";
          loadingColor = "white";
          break;
        case "line":
          iconColorClass = "text-white hover:text-line disabled:text-white disabled:hover:text-white";
          loadingColor = "white";
          break;
        case "white":
          iconColorClass = "text-black hover:text-white disabled:text-gray-200 disabled:hover:text-gray-200";
          loadingColor = "black";
          break;
        case "gray":
          iconColorClass = "text-gray-500 hover:text-gray-400 disabled:text-gray-500 disabled:hover:text-gray-500";
          loadingColor = "black";
          break;
        case "mediumGray01":
          iconColorClass = "text-gray-400 hover:text-gray-300 disabled:text-gray-400 disabled:hover:text-gray-400";
          loadingColor = "black";
          break;
        case "transparent":
          iconColorClass = "text-black";
          loadingColor = "black";
          break;
      }
      break;
    case "outline":
      switch (color) {
        case "purple":
          iconColorClass = "text-purple hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
          loadingColor = "purple";
          break;
        case "yellow":
          iconColorClass = "text-yellow hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
          loadingColor = "yellow";
          break;
        case "red":
          iconColorClass = "text-red hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
          loadingColor = "red";
          break;
        case "facebook":
          iconColorClass = "text-facebook hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
          loadingColor = "purple";
          break;
        case "twitter":
          iconColorClass = "text-twitter hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
          loadingColor = "purple";
          break;
        case "line":
          iconColorClass = "text-line hover:text-white disabled:text-gray-500 disabled:hover:text-gray-500";
          loadingColor = "purple";
          break;
        case "white":
          iconColorClass = "text-black hover:text-white disabled:text-gray-200 disabled:hover:text-gray-200";
          loadingColor = "black";
          break;
        case "gray":
          iconColorClass = "text-white";
          loadingColor = "black";
          break;
        case "mediumGray01":
          iconColorClass = "text-white";
          loadingColor = "black";
          break;
        case "transparent":
          iconColorClass = "text-black";
          loadingColor = "black";
          break;
      }
      break;
  }

  let shadowClass = "";
  if (shadow) {
    shadowClass = "shadow";
  }

  const Inner = () => (
    <>
      <Icon
        className={`${loadingIconColorClass}`}
        color={iconColor}
        currentType={currentType}
        name={iconName}
        size={iconSize}
        style={iconStyle}
      />
      {loading && (
        <span className="absolute flex top-1/2 transform -translate-y-1/2">
          <Spinner color={loadingColor} size={loadingSize} />
        </span>
      )}
    </>
  );

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
        disabled={disabled || loading}
        style={style}
        type="button"
        {...props}
      >
        <Inner />
      </button>
    );
  }
};
