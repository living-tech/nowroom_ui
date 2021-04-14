import { CSSProperties, VFC } from "react";

import { Icon } from "../../atoms/Icon/Default";
import { Color, IconName } from "../../atoms/Icon/Presenter";
import { Text } from "../../atoms/Text/Default";

export type Size = "sm" | "md";

export type Props = {
  className?: string;
  color?: Color;
  iconName: IconName;
  label: string;
  size?: Size;
  style?: CSSProperties;
};

export const Presenter: VFC<Props> = ({ className, color, iconName, label, size = "md", style }) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`} style={style}>
      <Icon color={color} name={iconName} size={size === "md" ? "lg" : "md"} />
      <Text
        className="leading-none"
        color={color}
        size={size === "md" ? "xs" : "xxs"}
        style={{ marginTop: size === "md" ? 8 : 2 }}
      >
        {label}
      </Text>
    </div>
  );
};
