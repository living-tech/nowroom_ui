import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextRed: VFC<Props> = ({ color = "red", ...props }) => {
  return <Presenter color={color} {...props} />;
};
