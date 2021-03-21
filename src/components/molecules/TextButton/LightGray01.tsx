import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextButtonLightGray01: VFC<Props> = ({ color = "lightGray01", ...props }) => {
  return <Presenter color={color} {...props} />;
};
