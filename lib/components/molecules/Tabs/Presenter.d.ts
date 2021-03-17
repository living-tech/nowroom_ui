import { CSSProperties, FC } from "react";
export declare type Item = {
    label: string;
    renderPanel: () => JSX.Element;
};
export declare type Props = {
    className?: string;
    items: Array<Item>;
    style?: CSSProperties;
};
export declare const Presenter: FC<Props>;
//# sourceMappingURL=Presenter.d.ts.map