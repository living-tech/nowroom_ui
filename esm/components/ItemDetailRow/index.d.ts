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
    /**
     *
     * currency: 円
     * monthAndCurrency: 100以上:円、それ以外:ヶ月
     * monthAndPercentAndCurrency: 1～99:ヶ月、101～200:100を引いて% 201以上:円
     * percentAndCurrency: 998以下:%、1002以上:円
     *
     **/
    unitPattern?: "currency" | "monthAndCurrency" | "monthAndPercentAndCurrency" | "percentAndCurrency";
    value: number;
}
export declare const ItemDetailRowRoomType: VFC<ItemDetailRowRoomTypeProps>;
export declare const createRoomPriceUnit: (value?: number | null | undefined, unitPattern?: "currency" | "monthAndCurrency" | "monthAndPercentAndCurrency" | "percentAndCurrency" | undefined) => string;
export {};
//# sourceMappingURL=index.d.ts.map