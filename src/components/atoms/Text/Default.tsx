import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const Text: VFC<Props> = ({ children, color, ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
