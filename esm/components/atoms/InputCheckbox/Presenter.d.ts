import { ChangeEvent, CSSProperties, ReactNode, VFC } from "react";
import { Color, Size, Weight } from "../Text/Presenter";
export declare type Item = {
    label: string | ReactNode;
    value: string;
};
export declare type Props = {
    checked?: boolean;
    className?: string;
    createRef?: (input: HTMLInputElement) => void;
    error?: string;
    item: Item;
    labelColor?: Color;
    labelSize?: Size;
    labelStyle?: CSSProperties;
    labelWeight?: Weight;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map