import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const ButtonWhite: VFC<Props> = ({ children, color = "white", visualType = "fill", ...props }) => {
  return (
    <Presenter color={color} visualType={visualType} {...props}>
      {children}
    </Presenter>
  );
};
