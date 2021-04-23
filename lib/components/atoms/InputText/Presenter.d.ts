import { ChangeEvent, CSSProperties, VFC } from "react";
import { IconName } from "../Icon/Presenter";
import { Weight } from "../Text/Presenter";
export declare type Size = "xs" | "sm" | "md";
export declare type Props = {
    any?: boolean;
    anyLabel?: string;
    autocomplete?: "on" | "off" | "current-password" | "new-password";
    className?: string;
    color?: "gray" | "white";
    createRef?: (input: HTMLInputElement) => void;
    defaultValue?: string;
    error?: string;
    iconName?: IconName;
    id?: string;
    label?: string;
    name?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    renderDescription?: () => JSX.Element;
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