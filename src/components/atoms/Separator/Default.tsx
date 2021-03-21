import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const Separator: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
