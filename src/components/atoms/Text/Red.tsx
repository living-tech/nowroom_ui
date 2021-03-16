import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextRed: FC<Props> = ({ children, color = "red", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
