import { CSSProperties, VFC } from "react";

import { Icon } from "../../atoms/Icon/Default";
import { Color, IconName } from "../../atoms/Icon/Presenter";
import { Text } from "../../atoms/Text/Default";

export type Props = {
  className?: string;
  color?: Color;
  iconName: IconName;
  label: string;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({ className, color, iconName, label, style }) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`} style={style}>
      <Icon color={color} name={iconName} size={"lg"} />
      <Text className="mt-1.5" color={color} size={"xs"}>
        {label}
      </Text>
    </div>
  );
};
