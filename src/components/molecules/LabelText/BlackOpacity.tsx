import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextBlackOpacity: VFC<Props> = ({ color = "blackOpacity", ...props }) => {
  return <Presenter color={color} {...props} />;
};
