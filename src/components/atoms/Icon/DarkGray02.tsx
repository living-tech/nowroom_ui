import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconDarkGray02: FC<Props> = ({ color = "darkGray02", ...props }) => {
  return <Presenter color={color} {...props} />;
};
