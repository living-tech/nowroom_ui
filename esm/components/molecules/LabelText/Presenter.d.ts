import { CSSProperties, ReactNode, VFC } from "react";
export declare type Color = "pink" | "white" | "cyan" | "blue" | "purple" | "green" | "yellow" | "mediumGray01" | "lightGray02" | "blackOpacity" | "red";
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