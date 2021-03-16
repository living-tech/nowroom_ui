import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextCyan: FC<Props> = ({ children, color = "cyan", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
