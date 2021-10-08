import { ReactNode, VFC } from "react";
export declare type CloseButtonPosition = "top" | "bottom";
export declare type Props = {
    children: ReactNode;
    closeButtonPosition?: CloseButtonPosition;
    escLabel?: string;
    isVisible: boolean;
    loading?: boolean;
    maxWidth?: number;
    modalClassName?: string;
    onRequestClose?: () => void;
    paddingHorizontal?: boolean;
    paddingVertical?: boolean;
    renderFixedBottom?: () => JSX.Element;
    zIndex?: number;
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map