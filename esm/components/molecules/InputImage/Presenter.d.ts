import { ChangeEvent, CSSProperties, DragEvent, VFC } from "react";
export declare type Props = {
    any?: boolean;
    anyLabel?: string;
    className?: string;
    dragAndDropLabel?: string;
    fileSelectLabel?: string;
    gallerySelectLabel?: string;
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
export declare const Presenter: VFC<Props>;
//# sourceMappingURL=Presenter.d.ts.map