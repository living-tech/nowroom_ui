import { CSSProperties, VFC } from "react";
export declare type Item = {
    label: string;
    num: number;
};
export declare type Props = {
    active: boolean;
    className?: string;
    id?: string;
    item: Item;
    onClick?: (num: number) => void;
    onMouseEnter?: (num: number) => void;
    onMouseLeave?: () => void;
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map
