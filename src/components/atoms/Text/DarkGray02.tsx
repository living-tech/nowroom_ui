import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextDarkGray02: FC<Props> = ({ children, color = "darkGray02", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
