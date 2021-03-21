import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextWhite: VFC<Props> = ({ children, color = "white", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
