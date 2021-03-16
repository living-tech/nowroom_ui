import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextPurple: FC<Props> = ({ children, color = "purple", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
