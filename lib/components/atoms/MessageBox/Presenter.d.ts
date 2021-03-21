import { CSSProperties, ReactNode, VFC } from "react";
export declare type Color = "purple" | "red" | "yellow";
export declare type Size = "md" | "sm";
export declare type Props = {
    border?: boolean;
    children: ReactNode;
    className?: string;
    color?: Color;
    size?: Size;
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map