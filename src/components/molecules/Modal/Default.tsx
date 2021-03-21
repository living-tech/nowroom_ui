import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const Modal: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
