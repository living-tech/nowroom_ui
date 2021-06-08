import { CSSProperties } from "react";
export declare type Item = {
    href: string;
    label: string;
};
export declare type Props = {
    id?: string;
    item: Item;
    onLinkMouseEnter?: (href: string) => void;
    onLinkMouseLeave?: () => void;
    style?: CSSProperties;
};
export declare const Presenter: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLLIElement>>;
//# sourceMappingURL=Presenter.d.ts.map