import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const LabelText: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
