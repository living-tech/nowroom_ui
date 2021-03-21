import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconYellow: VFC<Props> = ({ color = "yellow", ...props }) => {
  return <Presenter color={color} {...props} />;
};
