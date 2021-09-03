import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextYellow: VFC<Props> = ({ children, color = "yellow", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
