import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonTransparent: VFC<Props> = ({
  color = "transparent",
  shadow = false,
  visualType = "fill",
  ...props
}) => {
  return <Presenter color={color} shadow={shadow} visualType={visualType} {...props} />;
};
