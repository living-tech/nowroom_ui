import { ChangeEvent, CSSProperties, VFC } from "react";
import { Color as IconColor, IconName } from "../Icon/Presenter";
export declare type Item = {
    key?: string | number;
    label: string;
    value: string | number;
};
export declare type Size = "xxs" | "xs" | "sm" | "md";
export declare type Props = {
    any?: boolean;
    anyLabel?: string;
    backgroundColor?: "gray" | "white";
    block?: boolean;
    className?: string;
    createRef?: (input: HTMLSelectElement) => void;
    defaultValue?: string | number;
    disabled?: boolean;
    disabledPlaceholder?: boolean;
    disabledRightArrow?: boolean;
    error?: string;
    iconColor?: IconColor;
    iconName?: IconName;
    id?: string;
    items: Array<Item>;
    label?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    require?: boolean;
    requireLabel?: boolean;
    size?: Size;
    style?: CSSProperties;
    value?: string | number;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map