import { CSSProperties, ReactNode, VFC } from "react";
import { IconName } from "../../atoms/Icon/Presenter";
import { Size } from "../../atoms/Text/Presenter";
export declare type Weight = "normal" | "bold";
export declare type Color = "purple" | "white" | "black" | "mediumGray02" | "mediumGray01" | "lightGray01" | "lightGray02" | "darkGray01" | "darkGray02";
export declare type Props = {
    block?: boolean;
    children: ReactNode;
    className?: string;
    color?: Color;
    disabled?: boolean;
    href?: string;
    iconName?: IconName;
    iconPosition?: "left" | "right";
    loading?: boolean;
    onClick?: () => void;
    size?: Size;
    style?: CSSProperties;
    tag?: "button" | "a";
    target?: "_blank";
    type?: "button" | "submit";
    weight?: Weight;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map