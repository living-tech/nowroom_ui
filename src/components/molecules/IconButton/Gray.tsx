import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButtonGray: VFC<Props> = ({ color = "gray", visualType = "fill", ...props }) => {
  return <Presenter color={color} visualType={visualType} {...props} />;
};
