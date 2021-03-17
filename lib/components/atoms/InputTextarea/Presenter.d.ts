import { ChangeEvent, CSSProperties, FC } from "react";
import { Weight } from "../Text/Presenter";
export declare type Props = {
    any?: boolean;
    className?: string;
    createRef?: (input: HTMLTextAreaElement) => void;
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
    weight?: Weight;
};
export declare const Presenter: FC<Props>;
//# sourceMappingURL=Presenter.d.ts.map