import { CSSProperties, FC } from "react";

import { TextBlack } from "../../atoms/Text/Black";

export type Props = {
  className?: string;
  content: string;
  style?: CSSProperties;
  title: string;
};

export const Presenter: FC<Props> = ({ className, content, style, title }) => {
  return (
    <div className={`flex items-center justify-between px-2 ${className}`} style={style}>
      <div className="py-1">
        <TextBlack size={"sm"}>{title}</TextBlack>
      </div>
      <div className="py-1 ml-4">
        <TextBlack size={"sm"} weight={"bold"}>
          {content}
        </TextBlack>
      </div>
    </div>
  );
};
