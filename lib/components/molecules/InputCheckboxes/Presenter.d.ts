import { ChangeEvent, CSSProperties, FC } from "react";
import { Item } from "../../atoms/InputCheckbox/Presenter";
export declare type Props = {
    any?: boolean;
    className?: string;
    columns?: number;
    createRef?: (input: HTMLInputElement) => void;
    id?: string;
    items: Array<Item>;
    label?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    style?: CSSProperties;
};
export declare const Presenter: FC<Props>;
//# sourceMappingURL=Presenter.d.ts.map