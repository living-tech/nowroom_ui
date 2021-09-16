import { CSSProperties, ReactNode, VFC } from "react";
export declare type Item = {
    alt: string;
    node?: ReactNode;
    path: string;
};
export declare type Props = {
    autoplay?: boolean;
    className?: string;
    items: Array<Item>;
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map