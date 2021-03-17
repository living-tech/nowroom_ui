import { CSSProperties, FC } from "react";
export declare type Item = {
    alt: string;
    path: string;
};
export declare type Props = {
    autoplay?: boolean;
    className?: string;
    items: Array<Item>;
    style?: CSSProperties;
};
export declare const Presenter: FC<Props>;
//# sourceMappingURL=Presenter.d.ts.map