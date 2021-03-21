import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextYellow: VFC<Props> = ({ color = "yellow", ...props }) => {
  return <Presenter color={color} {...props} />;
};
