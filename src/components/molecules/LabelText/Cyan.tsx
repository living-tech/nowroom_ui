import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextCyan: VFC<Props> = ({ color = "cyan", ...props }) => {
  return <Presenter color={color} {...props} />;
};
