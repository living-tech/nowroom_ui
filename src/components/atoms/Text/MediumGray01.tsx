import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextMediumGray01: FC<Props> = ({ children, color = "mediumGray01", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
