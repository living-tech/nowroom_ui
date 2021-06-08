import { CSSProperties } from "react";
export declare type Item = {
    color?: "black" | "red";
    label: string;
    value: string;
};
export declare type Props = {
    className?: string;
    items: Array<Item>;
    onClick?: (item: Item) => void;
    style?: CSSProperties;
};
export declare const Presenter: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Presenter.d.ts.map