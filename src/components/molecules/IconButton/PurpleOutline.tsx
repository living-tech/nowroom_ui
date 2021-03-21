import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonPurpleOutline: VFC<Props> = ({ color = "purple", visualType = "outline", ...props }) => {
  return <Presenter color={color} visualType={visualType} {...props} />;
};
