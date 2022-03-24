import { ChangeEvent, CSSProperties, VFC } from "react";
import { Weight } from "../Text/Presenter";
export declare type Props = {
    any?: boolean;
    anyLabel?: string;
    backgroundColor?: "gray" | "white";
    className?: string;
    createRef?: (input: HTMLTextAreaElement) => void;
    defaultValue?: string;
    disabled?: boolean;
    error?: string;
    id?: string;
    label?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    renderDescription?: () => JSX.Element;
    resize?: boolean;
    rows?: number;
    style?: CSSProperties;
    value?: string;
    weight?: Weight;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map