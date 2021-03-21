import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const MessageBox: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
