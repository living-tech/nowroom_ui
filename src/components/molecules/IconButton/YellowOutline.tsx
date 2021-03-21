import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonYellowOutline: VFC<Props> = ({ color = "yellow", visualType = "outline", ...props }) => {
  return <Presenter color={color} visualType={visualType} {...props} />;
};
