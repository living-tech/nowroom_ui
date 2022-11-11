import { CSSProperties, VFC } from "react";
export declare type Item = {
    label: string;
    value: string;
};
export declare type Props = {
    className?: string;
    color?: "purple" | "white";
    iconType?: "selected" | "unselected";
    item: Item;
    onClick?: (item: Item) => void;
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map