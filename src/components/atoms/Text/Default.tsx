import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const Text: FC<Props> = ({ children, color, ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
