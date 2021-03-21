import dayjs, { Dayjs } from "dayjs";
import { CSSProperties, VFC } from "react";

import { TextBlack } from "../../atoms/Text/Black";
import { IconButton } from "../IconButton/Default";

export type Props = {
  activeIndicatesPeriod: "day" | "month";
  className?: string;
  currentDate: Dayjs;
  onNextClick: () => void;
  onPrevClick: () => void;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({
  activeIndicatesPeriod,
  className,
  currentDate,
  onNextClick,
  onPrevClick,
  style,
}) => {
  let dayFormat;
  if (activeIndicatesPeriod === "day") {
    dayFormat = "YYYY年M月";
  } else {
    dayFormat = "YYYY年";
  }

  return (
    <div
      className={`inline-flex items-center bg-gray-100 rounded-full px-2 ${className}`}
      style={{ height: 36, ...style }}
    >
      <IconButton
        radius
        color={"transparent"}
        iconColor={"mediumGray02"}
        iconName={"FiChevronLeft"}
        onClick={onPrevClick}
        shadow={false}
        size={"sm"}
      />
      <TextBlack className="ml-2" size={"sm"} weight={"bold"}>
        {dayjs(currentDate).format(dayFormat)}
      </TextBlack>
      <IconButton
        radius
        className="ml-2"
        color={"transparent"}
        iconColor={"mediumGray02"}
        iconName={"FiChevronRight"}
        onClick={onNextClick}
        shadow={false}
        size={"sm"}
      />
    </div>
  );
};
