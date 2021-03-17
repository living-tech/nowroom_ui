import dayjs from "dayjs";
import { CSSProperties, FC } from "react";

import { iPhoneMockHeight, iPhoneMockWidth } from "../../../constnats/layouts";
import { TextBlack } from "../../atoms/Text/Black";

export type Props = {
  className?: string;
  style?: CSSProperties;
};

export const Presenter: FC<Props> = ({ children, className, style }) => {
  return (
    <div
      className={`flex flex-col rounded-4xl relative overflow-x-hidden border-4 border-black ${className}`}
      style={{
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(30, 29, 37, 0.08)",
        height: iPhoneMockHeight,
        width: iPhoneMockWidth,
        ...style,
      }}
    >
      <span
        className="left-1/2 rounded-b-xl absolute top-0 inline-block transform -translate-x-1/2 bg-black"
        style={{
          height: 20,
          width: 180,
        }}
      />
      <span
        className="left-1/2 rounded-xl absolute inline-block transform -translate-x-1/2 bg-gray-700"
        style={{
          height: 4,
          top: 8,
          width: 50,
        }}
      />
      <div className="pt-1 pb-2 pl-5">
        <TextBlack size={"xs"} weight={"bold"}>
          {dayjs(new Date()).format("H:mm")}
        </TextBlack>
      </div>
      <div className="flex-grow overflow-y-scroll">{children}</div>
    </div>
  );
};
