import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextButtonMediumGray02: VFC<Props> = ({ color = "mediumGray02", ...props }) => {
  return <Presenter color={color} {...props} />;
};
