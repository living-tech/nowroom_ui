import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextYellow600: VFC<Props> = ({ color = "yellow600", ...props }) => {
  return <Presenter color={color} {...props} />;
};
