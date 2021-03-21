import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextDarkGray02: VFC<Props> = ({ children, color = "darkGray02", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
