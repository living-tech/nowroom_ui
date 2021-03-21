import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconBlack: VFC<Props> = ({ color = "black", ...props }) => {
  return <Presenter color={color} {...props} />;
};
