import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextDarkGray01: VFC<Props> = ({ children, color = "darkGray01", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
