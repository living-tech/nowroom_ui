import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const MessageAlertBoxWarning: VFC<Props> = ({ type = "warning", ...props }) => {
  return <Presenter type={type} {...props} />;
};
