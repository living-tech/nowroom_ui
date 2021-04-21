import { CSSProperties, ReactNode, VFC } from "react";

import { Icon } from "../../atoms/Icon/Default";
import { IconName, Size as IconSize } from "../../atoms/Icon/Presenter";
import { Spinner } from "../../atoms/Spinner/Default";
import { Size } from "../../atoms/Text/Presenter";

export type Weight = "normal" | "bold";

export type Color =
  | "purple"
  | "white"
  | "black"
  | "mediumGray02"
  | "mediumGray01"
  | "lightGray01"
  | "lightGray02"
  | "darkGray01"
  | "darkGray02";

export type Props = {
  block?: boolean;
  children: ReactNode;
  className?: string;
  color?: Color;
  disabled?: boolean;
  href?: string;
  iconName?: IconName;
  iconPosition?: "left" | "right";
  loading?: boolean;
  onClick?: () => void;
  size?: Size;
  style?: CSSProperties;
  tag?: "button" | "a";
  target?: "_blank";
  type?: "button" | "submit";
  weight?: Weight;
};

export const Presenter: VFC<Props> = ({
  block = false,
  children,
  className = "",
  color = "purple",
  disabled,
  href,
  iconName,
  iconPosition = "left",
  loading,
  size = "md",
  style,
  tag = "button",
  target,
  type = "button",
  weight = "bold",
  ...props
}) => {
  const baseClass =
    "relative cursor-pointer focus:outline-none transition duration-200 ease-out inline-flex disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:text-gray-500 justify-center items-center";

  let textSizeClass;
  let iconSize: IconSize;
  let loadingSizeClass;
  switch (size) {
    case "xxs":
      textSizeClass = "text-xxs";
      iconSize = "sm";
      loadingSizeClass = 16;
      break;
    case "xs":
      textSizeClass = "text-xs";
      iconSize = "sm";
      loadingSizeClass = 16;
      break;
    case "sm":
      textSizeClass = "text-sm";
      iconSize = "sm";
      loadingSizeClass = 18;
      break;
    case "md":
      textSizeClass = "text-md";
      iconSize = "sm";
      loadingSizeClass = 20;
      break;
    case "lg":
      textSizeClass = "text-lg";
      iconSize = "sm";
      loadingSizeClass = 24;
      break;
    case "xl":
      textSizeClass = "text-xl";
      iconSize = "md";
      loadingSizeClass = 24;
      break;
    case "xxl":
      textSizeClass = "text-2xl";
      iconSize = "md";
      loadingSizeClass = 26;
      break;
  }

  let weightClass = "";
  if (weight === "bold") {
    weightClass = "font-bold";
  }

  let loadingTextClass = "";
  if (loading) {
    loadingTextClass = "opacity-0";
  }

  let textColorClass = "";
  switch (color) {
    case "purple":
      textColorClass = "text-purple hover:text-black";
      break;
    case "white":
      textColorClass = "text-white hover:text-purple";
      break;
    case "black":
      textColorClass = "text-black hover:text-purple";
      break;
    case "darkGray02":
      textColorClass = "text-gray-700 hover:text-purple";
      break;
    case "darkGray01":
      textColorClass = "text-gray-600 hover:text-purple";
      break;
    case "mediumGray02":
      textColorClass = "text-gray-500 hover:text-purple";
      break;
    case "mediumGray01":
      textColorClass = "text-gray-400 hover:text-purple";
      break;
    case "lightGray02":
      textColorClass = "text-gray-300 hover:text-purple";
      break;
    case "lightGray01":
      textColorClass = "text-gray-200 hover:text-purple";
      break;
  }

  let blockClass = "";
  if (block) {
    blockClass = "w-full";
  }

  const Inner = () => (
    <>
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
        <span className="absolute flex top-1/2 transform -translate-y-1/2">
          <Spinner size={loadingSizeClass} />
        </span>
      )}
    </>
  );

  if (tag === "a") {
    return (
      <a
        className={`${baseClass} ${textSizeClass} ${textColorClass} ${weightClass} ${blockClass} ${className}`}
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
        className={`${baseClass} ${textSizeClass} ${textColorClass} ${weightClass} ${blockClass} ${className}`}
        disabled={disabled || loading}
        style={style}
        type={type}
        {...props}
      >
        <Inner />
      </button>
    );
  }
};
