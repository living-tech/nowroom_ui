import { CSSProperties, VFC } from "react";
import { Size } from "../../atoms/Tab/Presenter";
export declare type Item = {
    label: string;
    renderPanel: () => JSX.Element;
};
export declare type Props = {
    className?: string;
    hiddenTabLabels?: boolean;
    id?: string;
    initialContainerWidth?: number;
    items: Array<Item>;
    onClickTab?: (index: number) => void;
    panelsContainerClassName?: string;
    panelsContainerStyle?: CSSProperties;
    style?: CSSProperties;
    tabContainerClassName?: string;
    tabContainerStyle?: CSSProperties;
    tabSize?: Size;
    tabsContainerClassName?: string;
    tabsContainerStyle?: CSSProperties;
    tabsPosition?: "left" | "center";
    tabsUnderLine?: boolean;
    tabsWidth?: "full" | "auto";
};
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map