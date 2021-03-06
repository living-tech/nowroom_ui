import { CSSProperties, VFC } from "react";
export declare type Item = {
    label: string;
    value: string;
};
export declare type Props = {
    className?: string;
    item: Item;
    onClick?: (item: Item) => void;
    style?: CSSProperties;
    type: "selected" | "unselected";
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map