import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconMediumGray02: FC<Props> = ({ color = "mediumGray02", ...props }) => {
  return <Presenter color={color} {...props} />;
};
