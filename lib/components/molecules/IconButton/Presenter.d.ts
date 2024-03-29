import { CSSProperties, VFC } from "react";
import { Color as IconColor, CurrentType, IconName } from "../../atoms/Icon/Presenter";
export declare type Color = "purple" | "yellow" | "red" | "white" | "transparent" | "facebook" | "twitter" | "line" | "gray" | "mediumGray01";
export declare type Size = "xs" | "sm" | "md" | "lg";
export declare type Props = {
    border?: boolean;
    className?: string;
    color?: Color;
    currentType?: CurrentType;
    disabled?: boolean;
    href?: string;
    iconColor?: IconColor;
    iconName: IconName;
    loading?: boolean;
    onClick?: () => void;
    radius?: boolean;
    shadow?: boolean;
    size?: Size;
    strokeWidth?: number;
    style?: CSSProperties;
    tag?: "button" | "a";
    target?: "_blank";
    visualType?: "fill" | "outline";
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map