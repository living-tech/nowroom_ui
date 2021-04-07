import { ChangeEvent, CSSProperties, VFC } from "react";
export declare type Item = {
    key?: string | number;
    label: string;
    value: string | number;
};
export declare type Size = "xs" | "sm" | "md";
export declare type Props = {
    any?: boolean;
    anyLabel?: string;
    block?: boolean;
    className?: string;
    createRef?: (input: HTMLSelectElement) => void;
    defaultValue?: string | number;
    disabledPlaceholder?: boolean;
    id?: string;
    items: Array<Item>;
    label?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    size?: Size;
    style?: CSSProperties;
    value?: string | number;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map