import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextWhite: FC<Props> = ({ children, color = "white", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
