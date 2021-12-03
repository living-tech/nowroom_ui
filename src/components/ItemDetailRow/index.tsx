import { ReactNode, VFC } from "react";

import { TextDarkGray02, TextRed } from "../atoms";

interface ItemDetailRowProps {
  className: string;
  left: ReactNode;
  right: ReactNode;
}

/*
 * 内訳表示に使用する行
 */
export const ItemDetailRow: VFC<ItemDetailRowProps> = ({ className, left, right }) => {
  return (
    <div className={`flex justify-between mt-1 ${className}`}>
      <TextDarkGray02 size="xs">{left}</TextDarkGray02>
      <TextDarkGray02 size="xs">{right}</TextDarkGray02>
    </div>
  );
};

interface ItemDetailRowRoomTypeProps {
  className: ItemDetailRowProps["className"];
  title: ItemDetailRowProps["left"];
  value: number;
}

export const ItemDetailRowRoomType: VFC<ItemDetailRowRoomTypeProps> = ({ className, title, value }) => {
  // 0以下は赤にする。
  if (value <= 0) {
    return (
      <ItemDetailRow
        className={className}
        left={title}
        right={<TextRed size="xs">{`${createRoomPriceUnit(value)}`} </TextRed>}
      />
    );
  }

  return <ItemDetailRow className={className} left={title} right={`${createRoomPriceUnit(value)}`} />;
};

export const isMonthUnit = (value: number) => {
  if (value <= 100) {
    return true;
  }

  return false;
};

export const createRoomPriceUnit = (value?: number | null) => {
  if (value === undefined || value === null) {
    return `¥0`;
  }

  return isMonthUnit(value) ? `${value}ヶ月` : `¥${value}`;
};
