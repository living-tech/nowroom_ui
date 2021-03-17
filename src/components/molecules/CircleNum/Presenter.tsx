import { CSSProperties, FC } from "react";

import { TextWhite } from "../../atoms/Text/White";

export type Props = {
  active: boolean;
  activeColor?: "purple" | "red";
  className?: string;
  num: number;
  style?: CSSProperties;
};

export const Presenter: FC<Props> = ({ active, activeColor = "purple", className, num, style }) => {
  let colorClass = "bg-gray-300";
  if (active) {
    colorClass = `bg-${activeColor}`;
  }

  return (
    <div
      className={`transition-colors duration-200 ease-out flex items-center justify-center inline-block w-6 h-6 rounded-full ${colorClass} ${className}`}
      style={style}
    >
      <TextWhite className="leading-none" size={"xs"} weight={"bold"}>
        {String(num)}
      </TextWhite>
    </div>
  );
};
