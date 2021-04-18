import { CSSProperties, VFC } from "react";
import { Color as IconColor, IconName } from "../../atoms/Icon/Presenter";
export declare type Color = "purple" | "yellow" | "red" | "white" | "transparent" | "facebook" | "twitter";
export declare type Props = {
    border?: boolean;
    className?: string;
    color?: Color;
    disabled?: boolean;
    href?: string;
    iconColor?: IconColor;
    iconName: IconName;
    onClick?: () => void;
    radius?: boolean;
    shadow?: boolean;
    size?: "sm" | "md" | "lg";
    style?: CSSProperties;
    tag?: "button" | "a";
    target?: "_blank";
    visualType?: "fill" | "outline";
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map