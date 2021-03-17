import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconLightGray02: FC<Props> = ({ color = "lightGray02", ...props }) => {
  return <Presenter color={color} {...props} />;
};
