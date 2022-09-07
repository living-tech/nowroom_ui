import { ReactNode, VFC } from "react";

import { TextDarkGray02, TextRed } from "../atoms";

interface ItemDetailRowProps {
  className?: string;
  left: ReactNode;
  right: ReactNode;
}

/*
 * 内訳表示に使用する行
 */
export const ItemDetailRow: VFC<ItemDetailRowProps> = ({ className, left, right }) => {
  return (
    <div className={`flex justify-between mt-1 ${className ?? ""}`}>
      <TextDarkGray02 size="xs">{left}</TextDarkGray02>
      <TextDarkGray02 size="xs">{right}</TextDarkGray02>
    </div>
  );
};

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

export const ItemDetailRowRoomType: VFC<ItemDetailRowRoomTypeProps> = ({
  className,
  title,
  unitPattern = "currency",
  value,
}) => {
  // 0以下は赤にする。
  if (value <= 0) {
    return (
      <ItemDetailRow
        className={className ?? ""}
        left={title}
        right={<TextRed size="xs">{`${createRoomPriceUnit(value, unitPattern)}`}</TextRed>}
      />
    );
  }

  return <ItemDetailRow className={className ?? ""} left={title} right={`${createRoomPriceUnit(value)}`} />;
};

export const createRoomPriceUnit = (
  value?: number | null,
  unitPattern?: "currency" | "monthAndCurrency" | "monthAndPercentAndCurrency" | "percentAndCurrency"
) => {
  if (value === undefined || value === null || value === 0) {
    return `¥0`;
  }

  switch (unitPattern) {
    case "monthAndCurrency":
      return value <= 100 ? `${value}ヶ月` : `¥${value.toLocaleString("ja-JP")}`;

    case "monthAndPercentAndCurrency":
      if (value >= 1 && value <= 99) {
        return `${value}ヶ月`;
      }
      if (value >= 101 && value <= 200) {
        return `${value - 100}%`;
      }
      return `¥${value.toLocaleString("ja-JP")}`;

    case "percentAndCurrency":
      if (value <= 998) {
        return `${value}%`;
      }
      return `¥${value.toLocaleString("ja-JP")}`;

    default:
      return `¥${value.toLocaleString("ja-JP")}`;
  }
};
