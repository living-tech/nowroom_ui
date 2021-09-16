import { CSSProperties, VFC } from "react";
export declare type Item = {
    alt: string;
    path: string;
};
export declare type Props = {
    autoplay?: boolean;
    className?: string;
    items: Array<Item> | Array<JSX.Element>;
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map