import { ReactNode, VFC } from "react";
interface ItemDetailRowProps {
    className?: string;
    left: ReactNode;
    right: ReactNode;
}
export declare const ItemDetailRow: VFC<ItemDetailRowProps>;
interface ItemDetailRowRoomTypeProps {
    className?: ItemDetailRowProps["className"];
    title: ItemDetailRowProps["left"];
    value: number;
}
export declare const ItemDetailRowRoomType: VFC<ItemDetailRowRoomTypeProps>;
export declare const isMonthUnit: (value: number) => boolean;
export declare const createRoomPriceUnit: (value?: number | null | undefined) => string;
export {};
//# sourceMappingURL=index.d.ts.map