import { CSSProperties } from "react";
import { Size as TextSize } from "../Text/Presenter";
export declare type Size = TextSize;
export declare type Props = {
    active?: boolean;
    className?: string;
    id?: string;
    index: number;
    label: string;
    onClick?: (index: number) => void;
    onTabMouseEnter: (index: number) => void;
    onTabMouseLeave: () => void;
    size?: Size;
    style?: CSSProperties;
};
export declare const Presenter: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLLIElement>>;
//# sourceMappingURL=Presenter.d.ts.map