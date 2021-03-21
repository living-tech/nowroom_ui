import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconRed: VFC<Props> = ({ color = "red", ...props }) => {
  return <Presenter color={color} {...props} />;
};
