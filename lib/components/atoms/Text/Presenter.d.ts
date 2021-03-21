import { CSSProperties, ReactNode, VFC } from "react";
export declare type Weight = "normal" | "bold";
export declare type Color = "black" | "darkGray02" | "darkGray01" | "mediumGray02" | "mediumGray01" | "lightGray02" | "lightGray01" | "white" | "purple" | "blue" | "pink" | "cyan" | "yellow" | "red";
export declare type Size = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export declare type Tag = "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p" | "abbr" | "b" | "cite" | "del" | "em" | "i" | "ins" | "kbd" | "mark" | "s" | "samp" | "span" | "sub" | "sup" | "u";
export declare type Props = {
    children: ReactNode;
    className?: string;
    color?: Color;
    size?: Size;
    style?: CSSProperties;
    tag?: Tag;
    weight?: Weight;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map