import { CSSProperties, VFC } from "react";
import { Color, IconName } from "../../atoms/Icon/Presenter";
import { Weight as TextWeight } from "../../atoms/Text/Presenter";
export declare type Size = "sm" | "md";
export declare type Weight = TextWeight;
export declare type Props = {
    className?: string;
    color?: Color;
    iconName: IconName;
    label: string;
    size?: Size;
    style?: CSSProperties;
    weight?: Weight;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map