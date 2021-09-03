import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextRed: VFC<Props> = ({ children, color = "red", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
