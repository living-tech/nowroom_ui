import { ChangeEvent, CSSProperties, FC } from "react";
import { Color, Size, Weight } from "../Text/Presenter";
export declare type Props = {
    checked?: boolean;
    className?: string;
    createRef?: (input: HTMLInputElement) => void;
    id?: string;
    label?: string;
    labelColor?: Color;
    labelPosition?: "left" | "right";
    labelSize?: Size;
    labelWeight?: Weight;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    style?: CSSProperties;
};
export declare const Presenter: FC<Props>;
//# sourceMappingURL=Presenter.d.ts.map