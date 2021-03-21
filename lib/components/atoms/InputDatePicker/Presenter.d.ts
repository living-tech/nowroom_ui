import { Dayjs } from "dayjs";
import { CSSProperties, VFC } from "react";
import { Size } from "../InputText/Presenter";
import { Weight } from "../Text/Presenter";
export declare type Props = {
    any?: boolean;
    className?: string;
    error?: string;
    id?: string;
    label?: string;
    name?: string;
    onChange?: (date: Dayjs) => void;
    placeholder?: string;
    size?: Size;
    style?: CSSProperties;
    value?: Dayjs;
    weight?: Weight;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map