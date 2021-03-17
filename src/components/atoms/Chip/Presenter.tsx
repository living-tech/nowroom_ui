import { CSSProperties, FC } from "react";

import { Text } from "../Text/Default";
import styles from "./Chip.module.scss";

export type Item = {
  label: string;
  value: string;
};

export type Props = {
  className?: string;
  item: Item;
  onClick?: (item: Item) => void;
  style?: CSSProperties;
  type: "selected" | "unselected";
};

export const Presenter: FC<Props> = ({ className, item, onClick, style, type = "selected", ...props }) => {
  const containerBaseClass =
    "transition-all ease-out duration-200 items-start inline-flex items-center justify-center py-1 pl-3 pr-1 font-medium border rounded-full cursor-pointer";

  let containerClass = "";
  if (type === "selected") {
    containerClass =
      "bg-purple hover:bg-white border-purple hover:text-purple stroke-purple hover:stroke-white text-white";
  } else {
    containerClass =
      "bg-white hover:bg-purple border-purple hover:text-white stroke-white hover:stroke-purple text-purple";
  }

  return (
    <div
      className={`${containerBaseClass} ${containerClass} ${styles.Container} ${className}`}
      onClick={() => onClick && onClick(item)}
      style={style}
      {...props}
    >
      <Text
        className="relative flex-initial text-current transition-all duration-200 ease-out"
        size={"xs"}
        style={{ top: 1 }}
      >
        {item.label}
      </Text>
      {type === "selected" ? (
        <div
          className={`transition-all ease-out duration-200 flex rounded-full w-5 h-5 bg-white items-center justify-center ml-2.5 ${styles.circleSelected}`}
        >
          <svg
            className={"transition-all ease-out duration-200"}
            height="14px"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            width="14px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        </div>
      ) : (
        <div
          className={`transition-all ease-out duration-200 flex rounded-full w-5 h-5 bg-purple items-center justify-center ml-2.5 ${styles.circleUnselected}`}
        >
          <svg
            className={"transition-all ease-out duration-200"}
            height="14px"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            width="14px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y1="6" y2="18" />
            <line x1="6" x2="18" y1="12" y2="12" />
          </svg>
        </div>
      )}
    </div>
  );
};
