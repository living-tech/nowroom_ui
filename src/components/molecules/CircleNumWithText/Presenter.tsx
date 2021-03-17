import { CSSProperties, FC } from "react";

import { Text } from "../../atoms/Text/Default";
import { CircleNum } from "../CircleNum/Default";

export type Item = {
  label: string;
  num: number;
};

export type Props = {
  active: boolean;
  className?: string;
  id?: string;
  item: Item;
  onClick?: (num: number) => void;
  onMouseEnter?: (num: number) => void;
  onMouseLeave?: () => void;
  style?: CSSProperties;
};

export const Presenter: FC<Props> = ({ active, className, id, item, onClick, onMouseEnter, onMouseLeave, style }) => {
  let colorClass = "text-gray-500";
  if (active) {
    colorClass = "text-purple";
  }

  return (
    <div
      className={`flex items-center px-5 inline-block cursor-pointer ${className}`}
      id={id}
      onClick={() => onClick && onClick(item.num)}
      onMouseEnter={() => onMouseEnter && onMouseEnter(item.num)}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      <CircleNum active={active} num={item.num} />
      <Text className={`ml-3 relative ${colorClass}`} size={"sm"} style={{ top: 1 }} weight={"bold"}>
        {item.label}
      </Text>
    </div>
  );
};
