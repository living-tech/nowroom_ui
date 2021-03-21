import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextPurple: VFC<Props> = ({ color = "blue", ...props }) => {
  return <Presenter color={color} {...props} />;
};
