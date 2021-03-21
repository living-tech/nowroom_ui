import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextLightGray02: VFC<Props> = ({ children, color = "lightGray02", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
