import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextDarkGray01: FC<Props> = ({ children, color = "darkGray01", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
