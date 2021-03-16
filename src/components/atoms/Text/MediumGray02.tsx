import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextMediumGray02: FC<Props> = ({ children, color = "mediumGray02", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
};
