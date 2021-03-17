import { CSSProperties, FC } from "react";

import { Icon } from "../../atoms/Icon/Default";
import { IconName } from "../../atoms/Icon/Presenter";
import { Spinner } from "../../atoms/Spinner/Default";
import { Size } from "../../atoms/Text/Presenter";

export type Props = {
  block?: boolean;
  className?: string;
  color?: "purple" | "white" | "black" | "mediumGray02" | "lightGray01" | "lightGray02";
  disabled?: boolean;
  iconName?: IconName;
  iconPosition?: "left" | "right";
  loading?: boolean;
  onClick?: () => void;
  size?: Size;
  style?: CSSProperties;
  type?: "button" | "submit";
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
  size = "md",
  style,
  type = "button",
  ...props
}) => {
  const baseClass =
    "relative font-bold focus:outline-none transition duration-200 ease-out inline-flex disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:text-gray-500 justify-center items-center";

  let textSizeClass;
  let iconSize: Size;
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
    case "mediumGray02":
      textColorClass = "text-gray-500 hover:text-purple";
      break;
    case "lightGray02":
      textColorClass = "text-gray-200 hover:text-purple";
      break;
    case "lightGray01":
      textColorClass = "text-gray-100 hover:text-purple";
      break;
  }

  let blockClass = "";
  if (block) {
    blockClass = "w-full";
  }

  return (
    <button
      className={`${baseClass} ${textSizeClass} ${textColorClass} ${blockClass} ${className}`}
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
          <Spinner size={loadingSizeClass} />
        </span>
      )}
    </button>
  );
};
