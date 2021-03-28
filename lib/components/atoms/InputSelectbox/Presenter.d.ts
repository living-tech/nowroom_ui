import { ChangeEvent, CSSProperties, VFC } from "react";
export declare type Item = {
    label: string;
    value: string | number;
};
export declare type Props = {
    any?: boolean;
    block?: boolean;
    className?: string;
    createRef?: (input: HTMLSelectElement) => void;
    defaultValue?: string;
    disabledPlaceholder?: boolean;
    id?: string;
    items: Array<Item>;
    label?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    size?: "sm" | "md";
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map