import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const MessageAlertBoxSuccess: VFC<Props> = ({ type = "success", ...props }) => {
  return <Presenter type={type} {...props} />;
};
