import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonWhite: VFC<Props> = ({ color = "white", visualType = "fill", ...props }) => {
  return <Presenter color={color} visualType={visualType} {...props} />;
};
