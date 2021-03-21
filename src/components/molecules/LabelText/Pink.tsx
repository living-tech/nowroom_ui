import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextPink: VFC<Props> = ({ color = "pink", ...props }) => {
  return <Presenter color={color} {...props} />;
};
