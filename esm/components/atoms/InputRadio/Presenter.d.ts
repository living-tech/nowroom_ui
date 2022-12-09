import { ChangeEvent, CSSProperties, VFC } from "react";
export declare type Item = {
    label: string;
    value: string | number;
};
export declare type Props = {
    checked?: boolean;
    className?: string;
    createRef?: (input: HTMLInputElement) => void;
    item: Item;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    size?: "sm" | "md";
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map