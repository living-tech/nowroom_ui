import { CSSProperties } from "react";
export declare type Props = {
    active?: boolean;
    id?: string;
    index: number;
    label: string;
    onClick?: (index: number) => void;
    onTabMouseEnter: (index: number) => void;
    onTabMouseLeave: () => void;
    style?: CSSProperties;
};
export declare const Presenter: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLLIElement>>;
//# sourceMappingURL=Presenter.d.ts.map