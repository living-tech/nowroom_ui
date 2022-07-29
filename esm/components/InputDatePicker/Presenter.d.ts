import { Dayjs } from "dayjs";
import { CSSProperties, VFC } from "react";
import { Weight } from "../atoms/Text/Presenter";
export declare type Props = {
    any?: boolean;
    anyLabel?: string;
    className?: string;
    error?: string;
    id?: string;
    label?: string;
    monthLabel?: string;
    name?: string;
    onChange?: (date: Dayjs) => void;
    onClear?: () => void;
    placeholder?: string;
    selectableFrom?: Date;
    selectableTo?: Date;
    size?: "sm" | "md";
    style?: CSSProperties;
    value?: Dayjs;
    weight?: Weight;
    yearLabel?: string;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map