import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconDarkGray01: VFC<Props> = ({ color = "darkGray01", ...props }) => {
  return <Presenter color={color} {...props} />;
};
