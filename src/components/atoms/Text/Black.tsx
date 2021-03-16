import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextBlack: FC<Props> = ({ children, color = "black", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
