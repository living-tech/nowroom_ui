import { ReactNode, VFC } from "react";
export declare type Props = {
    children: ReactNode;
    escLabel?: string;
    isVisible: boolean;
    loading?: boolean;
    maxWidth?: number;
    onRequestClose?: () => void;
    renderFixedBottom?: () => JSX.Element;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map