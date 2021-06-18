import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const Image: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
