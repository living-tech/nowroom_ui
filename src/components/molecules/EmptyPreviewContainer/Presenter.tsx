import { CSSProperties, VFC } from "react";

import { TextLightGray02 } from "../../atoms/Text/LightGray02";

export type Props = {
  className?: string;
  label: string;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({ className, label, style }) => {
  return (
    <div className={`border border-gray-200 px-4 py-6 rounded ${className}`} style={style}>
      <TextLightGray02 className="text-center" size={"xs"} weight={"bold"}>
        {label}
      </TextLightGray02>
    </div>
  );
};
