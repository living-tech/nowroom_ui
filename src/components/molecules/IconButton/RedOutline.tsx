import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonRedOutline: VFC<Props> = ({ color = "red", visualType = "outline", ...props }) => {
  return <Presenter color={color} visualType={visualType} {...props} />;
};
