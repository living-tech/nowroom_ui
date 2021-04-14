import { CSSProperties, VFC } from "react";

import { Icon } from "../../atoms/Icon/Default";
import { Color, IconName } from "../../atoms/Icon/Presenter";
import { Text } from "../../atoms/Text/Default";
import { Weight as TextWeight } from "../../atoms/Text/Presenter";

export type Size = "sm" | "md";

export type Weight = TextWeight;

export type Props = {
  className?: string;
  color?: Color;
  iconName: IconName;
  label: string;
  size?: Size;
  style?: CSSProperties;
  weight?: Weight;
};

export const Presenter: VFC<Props> = ({ className, color, iconName, label, size = "md", style, weight = "normal" }) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`} style={style}>
      <Icon color={color} name={iconName} size={size === "md" ? "lg" : "md"} />
      <Text
        className="leading-none"
        color={color}
        size={size === "md" ? "xs" : "xxs"}
        style={{ marginTop: size === "md" ? 8 : 6 }}
        weight={weight}
      >
        {label}
      </Text>
    </div>
  );
};
