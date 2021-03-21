import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const MessageAlertBoxDanger: VFC<Props> = ({ type = "danger", ...props }) => {
  return <Presenter type={type} {...props} />;
};
