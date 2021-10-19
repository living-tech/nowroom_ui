import { ChangeEvent, CSSProperties, DragEvent, VFC } from "react";
export declare type Color = "white" | "gray";
export declare type Props = {
    any?: boolean;
    anyLabel?: string;
    backgroundColor?: Color;
    className?: string;
    createRef?: (input: HTMLInputElement) => void;
    disabled?: boolean;
    displayFileChangeButton?: boolean;
    dragAndDropFileSelectLabel?: string;
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