import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconCyan: VFC<Props> = ({ color = "cyan", ...props }) => {
  return <Presenter color={color} {...props} />;
};
