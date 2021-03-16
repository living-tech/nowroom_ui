import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextYellow: FC<Props> = ({ children, color = "yellow", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
