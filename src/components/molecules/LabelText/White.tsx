import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelTextWhite: VFC<Props> = ({ color = "white", ...props }) => {
  return <Presenter color={color} {...props} />;
};
