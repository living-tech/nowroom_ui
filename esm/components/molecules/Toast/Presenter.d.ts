import { CSSProperties, VFC } from "react";
export declare type Type = "success" | "information" | "warning" | "danger";
export declare type Props = {
    className?: string;
    description?: string;
    isVisible: boolean;
    onRequestClose?: () => void;
    position?: "rightBottom" | "leftBottom";
    size?: "md" | "sm";
    style?: CSSProperties;
    timeout?: number;
    title: string;
    type?: Type;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map