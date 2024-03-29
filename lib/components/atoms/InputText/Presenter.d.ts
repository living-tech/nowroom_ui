import { ChangeEvent, CSSProperties, FocusEvent, KeyboardEvent, VFC } from "react";
import { IconName } from "../Icon/Presenter";
import { Weight } from "../Text/Presenter";
export declare type Size = "xxs" | "xs" | "sm" | "md";
export declare type Props = {
    any?: boolean;
    anyLabel?: string;
    autocomplete?: "on" | "off" | "current-password" | "new-password";
    className?: string;
    color?: "gray" | "white";
    createRef?: (input: HTMLInputElement) => void;
    defaultValue?: string;
    disabled?: boolean;
    error?: string;
    iconName?: IconName;
    id?: string;
    inputClassName?: string;
    inputMode?: "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal";
    inputStyle?: CSSProperties;
    label?: string;
    list?: string;
    name?: string;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    readOnly?: boolean;
    renderDescription?: () => JSX.Element;
    require?: boolean;
    requireLabel?: string;
    size?: Size;
    style?: CSSProperties;
    type?: string;
    unit?: string;
    unitPosition?: "left" | "right";
    value?: string;
    weight?: Weight;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map