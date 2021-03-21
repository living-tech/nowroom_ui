import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconLightGray02: VFC<Props> = ({ color = "lightGray02", ...props }) => {
  return <Presenter color={color} {...props} />;
};
