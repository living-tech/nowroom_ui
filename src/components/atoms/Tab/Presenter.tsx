import { CSSProperties, forwardRef } from "react";

import { Text } from "../Text/Default";

export type Props = {
  active?: boolean;
  id?: string;
  index: number;
  label: string;
  onClick?: (index: number) => void;
  onTabMouseEnter: (index: number) => void;
  onTabMouseLeave: () => void;
  style?: CSSProperties;
};

export const Presenter = forwardRef<HTMLLIElement, Props>(
  ({ active, id, index, label, onClick, onTabMouseEnter, onTabMouseLeave, style, ...props }, ref) => {
    let textColorClass = "";
    if (active) {
      textColorClass = "text-purple";
    }

    return (
      <li
        ref={ref}
        className="hover:bg-purple-100 relative inline-block w-full pt-4 pb-3.5 pl-2 pr-2 text-center list-none transition duration-200 ease-out border-b border-gray-200 cursor-pointer"
        id={id}
        onClick={() => onClick && onClick(index)}
        onMouseEnter={() => onTabMouseEnter(index)}
        onMouseLeave={onTabMouseLeave}
        style={style}
        {...props}
      >
        <Text className={`transition duration-200 ease-out ${textColorClass}`} size={"xs"} weight={"bold"}>
          {label}
        </Text>
      </li>
    );
  }
);
