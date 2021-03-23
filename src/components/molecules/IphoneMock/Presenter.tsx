import dayjs from "dayjs";
import { CSSProperties, ReactNode, VFC } from "react";

import { iPhoneMockHeight, iPhoneMockWidth } from "../../../constnats";
import { TextBlack } from "../../atoms/Text/Black";

export type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({ children, className, style }) => {
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
        className="absolute top-0 inline-block bg-black left-1/2 rounded-b-xl transform -translate-x-1/2"
        style={{
          height: 20,
          width: 180,
        }}
      />
      <span
        className="absolute inline-block bg-gray-700 left-1/2 rounded-xl transform -translate-x-1/2"
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
