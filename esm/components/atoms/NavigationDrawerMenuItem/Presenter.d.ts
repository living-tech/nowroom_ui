import { CSSProperties } from "react";
export declare type Item = {
    danger?: boolean;
    href?: string;
    label: string;
    onClick?: () => void;
};
export declare type Props = {
    className?: string;
    item: Item;
    style?: CSSProperties;
};
export declare const Presenter: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Presenter.d.ts.map