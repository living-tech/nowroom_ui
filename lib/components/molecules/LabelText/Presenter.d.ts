import { CSSProperties, ReactNode, VFC } from "react";
export declare type Color = "pink" | "white" | "cyan" | "blue" | "purple" | "green" | "yellow" | "mediumGray01" | "lightGray02" | "blackOpacity";
export declare type Props = {
    children: ReactNode;
    className?: string;
    color?: Color;
    size?: "md" | "sm";
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map