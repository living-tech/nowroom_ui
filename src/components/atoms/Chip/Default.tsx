import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const Chip: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
