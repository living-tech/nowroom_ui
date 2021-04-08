import { ChangeEvent, CSSProperties, VFC } from "react";
import { Item } from "../../atoms/InputCheckbox/Presenter";
export declare type Props = {
    any?: boolean;
    anyLabel?: string;
    className?: string;
    columns?: number;
    createRef?: (input: HTMLInputElement) => void;
    defaultValue?: Array<string>;
    id?: string;
    items: Array<Item>;
    label?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    style?: CSSProperties;
    value?: Array<string>;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map