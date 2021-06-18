import { CSSProperties, ImgHTMLAttributes, VFC } from "react";
export declare type Item = {
    alt: string;
    path: string;
};
export declare type Props = {
    autoplay?: boolean;
    className?: string;
    imageTag: ImgHTMLAttributes<HTMLImageElement>;
    items: Array<Item>;
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map