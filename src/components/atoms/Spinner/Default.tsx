import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const Spinner: VFC<Props> = ({ color = "currentColor", ...props }) => {
  return <Presenter color={color} {...props} />;
};
