import { ChangeEvent, CSSProperties, FC } from "react";
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
    style?: CSSProperties;
};
export declare const Presenter: FC<Props>;
//# sourceMappingURL=Presenter.d.ts.map