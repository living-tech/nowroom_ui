import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextGreen: VFC<Props> = ({ color = "green", ...props }) => {
  return <Presenter color={color} {...props} />;
};
