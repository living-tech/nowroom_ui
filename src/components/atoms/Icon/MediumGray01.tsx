import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconMediumGray01: VFC<Props> = ({ color = "mediumGray01", ...props }) => {
  return <Presenter color={color} {...props} />;
};
