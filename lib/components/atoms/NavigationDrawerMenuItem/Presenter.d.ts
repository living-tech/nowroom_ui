import { CSSProperties, ReactNode } from "react";
export declare type Item = {
    className?: string;
    danger?: boolean;
    href?: string;
    label: ReactNode;
    onClick?: () => void;
};
export declare type Props = {
    className?: string;
    item: Item;
    style?: CSSProperties;
};
export declare const Presenter: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Presenter.d.ts.map