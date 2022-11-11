import { CSSProperties, ReactNode, VFC } from "react";
export declare type Color = "pink" | "white" | "cyan" | "cyan600" | "blue" | "purple" | "green" | "yellow" | "yellow600" | "mediumGray01" | "lightGray02" | "blackOpacity" | "red" | "purpleOutline";
export declare type TextColor = "text-white" | "text-gray-700" | "text-purple";
export declare type Props = {
    children: ReactNode;
    className?: string;
    color?: Color;
    isClickable?: boolean;
    size?: "md" | "sm" | "xs";
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map