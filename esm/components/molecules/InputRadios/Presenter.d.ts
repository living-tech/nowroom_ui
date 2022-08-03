import { ChangeEvent, CSSProperties, VFC } from "react";
import { Item } from "../../atoms/InputRadio/Presenter";
export declare type Props = {
    any?: boolean;
    anyLabel?: string;
    className?: string;
    columns?: number;
    createRef?: (input: HTMLInputElement) => void;
    id?: string;
    items: Array<Item>;
    label?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    require?: boolean;
    requireLabel?: string;
    size?: "sm" | "md";
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map