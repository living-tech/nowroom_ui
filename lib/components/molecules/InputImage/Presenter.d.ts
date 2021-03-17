import { ChangeEvent, CSSProperties, DragEvent, FC } from "react";
export declare type Props = {
    any?: boolean;
    className?: string;
    id?: string;
    imageUrls?: Array<string>;
    label?: string;
    name?: string;
    onFileChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onGalleryClick?: () => void;
    onHandleDrop?: (event: DragEvent<HTMLDivElement>) => void;
    onImageDeleteClick?: (imageUrl: string, index: number) => void;
    style?: CSSProperties;
};
export declare const Presenter: FC<Props>;
//# sourceMappingURL=Presenter.d.ts.map