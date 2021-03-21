import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonPurple: VFC<Props> = ({ color = "purple", visualType = "fill", ...props }) => {
  return <Presenter color={color} visualType={visualType} {...props} />;
};
