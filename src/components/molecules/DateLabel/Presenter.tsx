import { Dayjs } from "dayjs";
import { weekdaysShort as weekdays } from "dayjs/locale/ja";
import { CSSProperties, FC } from "react";

import { TextDarkGray01 } from "../../atoms/Text/DarkGray01";

export type Props = {
  className?: string;
  date: Dayjs;
  style?: CSSProperties;
};

export const Presenter: FC<Props> = ({ className, date, style }) => {
  return (
    <span className={`bg-gray-200 px-3 py-2 rounded-full inline-flex items-center ${className}`} style={style}>
      <TextDarkGray01 className="leading-none" size={"xs"} tag={"span"} weight={"bold"}>{`${date.format("M/D")}(${
        weekdays ? weekdays[date.day()] : ""
      })`}</TextDarkGray01>
    </span>
  );
};
