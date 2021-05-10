import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextPurple: VFC<Props> = ({ color = "purple", ...props }) => {
  return <Presenter color={color} {...props} />;
};
