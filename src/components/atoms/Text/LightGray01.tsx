import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextLightGray01: VFC<Props> = ({ children, color = "lightGray01", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
