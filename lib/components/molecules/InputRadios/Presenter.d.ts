import type { VariantProps } from "class-variance-authority";
import { ChangeEvent, CSSProperties, VFC } from "react";
import { Item } from "../../atoms/InputRadio/Presenter";
declare const variants: (props?: ({
    gap_size?: 2 | 4 | 6 | null | undefined;
    grid_cols?: 2 | 1 | 3 | 4 | 5 | 6 | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export declare type Props = {
    any?: boolean;
    anyLabel?: string;
    className?: string;
    createRef?: (input: HTMLInputElement) => void;
    cvaVariants?: VariantProps<typeof variants>;
    error?: string;
    id?: string;
    items: Array<Item>;
    label?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    require?: boolean;
    requireLabel?: string;
    size?: "sm" | "md";
    style?: CSSProperties;
};
export declare const Presenter: VFC<Props>;
export {};
//# sourceMappingURL=Presenter.d.ts.map