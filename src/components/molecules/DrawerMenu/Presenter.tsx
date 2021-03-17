import { CSSProperties, forwardRef } from "react";

import { Text } from "../../atoms/Text/Default";

export type Item = {
  color?: "black" | "red";
  label: string;
  value: string;
};

export type Props = {
  className?: string;
  items: Array<Item>;
  onClick?: (item: Item) => void;
  style?: CSSProperties;
};

export const Presenter = forwardRef<HTMLDivElement, Props>(({ className, items, onClick, style, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`inline-flex flex-col py-1 bg-white rounded shadow ${className}`}
      style={style}
      {...props}
    >
      {items.map((item) => (
        <div
          key={item.value}
          className="hover:bg-purple-100 last:border-transparent inline-block px-5 py-3 transition-colors duration-200 ease-out border-gray-100 rounded-t cursor-pointer"
          onClick={() => onClick && onClick(item)}
        >
          <Text color={item.color || "black"} size={"xs"} tag={"span"}>
            {item.label}
          </Text>
        </div>
      ))}
    </div>
  );
});
