import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextCyanD600: VFC<Props> = ({ color = "cyan600", ...props }) => {
  return <Presenter color={color} {...props} />;
};
