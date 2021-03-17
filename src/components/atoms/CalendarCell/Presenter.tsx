import { CSSProperties, FC } from "react";

export type ActiveIndicatesPeriod = "day" | "month";

export type Props = {
  activeIndicatesPeriod: ActiveIndicatesPeriod;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
};

export const Presenter: FC<Props> = ({ activeIndicatesPeriod, className, disabled, onClick, style }) => {
  const baseClass = "transition-colors duration-200 ease-out hover:bg-purple-100 cursor-pointer";

  let backgroundColorClass = "bg-white";
  if (disabled) {
    backgroundColorClass = "bg-gray-300";
  }

  return (
    <div
      className={`${baseClass} ${backgroundColorClass} ${className}`}
      onClick={onClick}
      style={{
        height: 59,
        width: activeIndicatesPeriod === "day" ? 36 : 44,
        ...style,
      }}
    />
  );
};
