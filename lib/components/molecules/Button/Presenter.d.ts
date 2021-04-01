import { CSSProperties, ReactNode, VFC } from "react";
import { IconName } from "../../atoms/Icon/Presenter";
export declare type Props = {
    block?: boolean;
    children: ReactNode;
    className?: string;
    color?: "purple" | "white" | "mediumGray02";
    disabled?: boolean;
    href?: string;
    iconName?: IconName;
    iconPosition?: "left" | "right";
    loading?: boolean;
    onClick?: () => void;
    padding?: boolean;
    shadow?: boolean;
    size?: "sm" | "md" | "lg" | "xl";
    style?: CSSProperties;
    tag?: "button" | "a";
    target?: "_blank";
    type?: "button" | "submit";
    visualType?: "fill" | "outline";
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map