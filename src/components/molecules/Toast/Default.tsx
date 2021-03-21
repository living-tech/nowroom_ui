import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const Toast: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
