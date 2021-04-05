import { CSSProperties, forwardRef } from "react";

import { Text } from "../Text/Default";
import { Size as TextSize } from "../Text/Presenter";

export type Size = "md" | "lg";

export type Props = {
  active?: boolean;
  className?: string;
  id?: string;
  index: number;
  label: string;
  onClick?: (index: number) => void;
  onTabMouseEnter: (index: number) => void;
  onTabMouseLeave: () => void;
  size?: Size;
  style?: CSSProperties;
  tabUnderLine?: boolean;
};

export const Presenter = forwardRef<HTMLLIElement, Props>(
  (
    {
      active,
      className = "",
      id,
      index,
      label,
      onClick,
      onTabMouseEnter,
      onTabMouseLeave,
      size = "md",
      style,
      tabUnderLine = true,
      ...props
    },
    ref
  ) => {
    let textColorClass = "";
    if (active) {
      textColorClass = "text-purple";
    }

    let borderClass = "";
    if (tabUnderLine) {
      borderClass = "border-b border-gray-200";
    }

    let textSize: TextSize;
    let paddingClass = "";
    switch (size) {
      case "md":
        textSize = "xs";
        paddingClass = "pt-4 px-2 pb-3.5";
        break;
      case "lg":
        textSize = "sm";
        paddingClass = "pt-5 px-10 pb-4";
        break;
    }

    return (
      <li
        ref={ref}
        className={`relative inline-block w-full text-center list-none cursor-pointer hover:bg-purple-100 transition duration-200 ease-out ${paddingClass} ${borderClass} ${className}`}
        id={id}
        onClick={() => onClick && onClick(index)}
        onMouseEnter={() => onTabMouseEnter(index)}
        onMouseLeave={onTabMouseLeave}
        style={style}
        {...props}
      >
        <Text
          className={`transition duration-200 ease-out ${textColorClass}`}
          size={textSize}
          style={{ whiteSpace: "nowrap" }}
          weight={"bold"}
        >
          {label}
        </Text>
      </li>
    );
  }
);
