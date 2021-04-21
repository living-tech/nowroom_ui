import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextButtonMediumGray01: VFC<Props> = ({ color = "mediumGray01", ...props }) => {
  return <Presenter color={color} {...props} />;
};
