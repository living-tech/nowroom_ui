import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonYellow: VFC<Props> = ({ color = "yellow", visualType = "fill", ...props }) => {
  return <Presenter color={color} visualType={visualType} {...props} />;
};
