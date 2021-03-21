import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const MessageAlertBox: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
