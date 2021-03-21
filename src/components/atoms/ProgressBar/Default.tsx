import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const ProgressBar: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
