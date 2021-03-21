import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextBlue: VFC<Props> = ({ color = "blue", ...props }) => {
  return <Presenter color={color} {...props} />;
};
