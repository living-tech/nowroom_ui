import { CSSProperties, FC } from "react";
import { Color, Size } from "../../atoms/Text/Presenter";
export declare type Item = {
    label: string;
    value: string | number;
};
export declare type Props = {
    activeValue?: string | number;
    className?: string;
    items: Array<Item>;
    label?: string;
    labelColor?: Color;
    labelPosition?: "left" | "right";
    labelSize?: Size;
    onClick?: (value: any) => void;
    style?: CSSProperties;
    tabsId?: string;
};
export declare const Presenter: FC<Props>;
//# sourceMappingURL=Presenter.d.ts.map