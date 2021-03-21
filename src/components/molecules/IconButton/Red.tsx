import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonRed: VFC<Props> = ({ color = "red", visualType = "fill", ...props }) => {
  return <Presenter color={color} visualType={visualType} {...props} />;
};
