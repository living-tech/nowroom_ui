import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextBlack: VFC<Props> = ({ children, color = "black", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
