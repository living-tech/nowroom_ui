import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextLightGray02: FC<Props> = ({ children, color = "lightGray02", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
