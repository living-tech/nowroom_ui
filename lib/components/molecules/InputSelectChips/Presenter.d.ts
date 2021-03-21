import { CSSProperties, VFC } from "react";
export declare type Item = {
    label: string;
    value: string;
};
export declare type Props = {
    className?: string;
    items: Array<Item>;
    label?: string;
    minHeight?: number;
    onChange?: (selectedItems: Array<Item>) => void;
    selectedLabel?: string;
    style?: CSSProperties;
    unselectedLabel?: string;
    value?: Array<Item>;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map