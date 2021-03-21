import { CSSProperties, ReactNode, VFC } from "react";
import { IconName } from "../../atoms/Icon/Presenter";
import { Size } from "../../atoms/Text/Presenter";
export declare type Props = {
    block?: boolean;
    children: ReactNode;
    className?: string;
    color?: "purple" | "white" | "black" | "mediumGray02" | "lightGray01" | "lightGray02";
    disabled?: boolean;
    iconName?: IconName;
    iconPosition?: "left" | "right";
    loading?: boolean;
    onClick?: () => void;
    size?: Size;
    style?: CSSProperties;
    type?: "button" | "submit";
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map