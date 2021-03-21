import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const Icon: VFC<Props> = ({ color, ...props }) => {
  return <Presenter color={color} {...props} />;
};
