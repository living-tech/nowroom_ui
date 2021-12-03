import React, { ReactNode, VFC } from "react";

import { TextDarkGray02 } from "../atoms";

interface ItemDetailProps {
  children: ReactNode;
  className: string;
  title: ReactNode;
}

/*
 * 内訳表示
 */
export const ItemDetail: VFC<ItemDetailProps> = ({ children, className, title }) => {
  return (
    <div className={`${className}`}>
      <div className="py-1 text-center bg-gray-200">
        <TextDarkGray02 size="xs">{title}</TextDarkGray02>
      </div>
      {children}
    </div>
  );
};
