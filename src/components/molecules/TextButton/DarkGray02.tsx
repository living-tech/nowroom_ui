import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextButtonDarkGray02: VFC<Props> = ({ color = "darkGray02", ...props }) => {
  return <Presenter color={color} {...props} />;
};
