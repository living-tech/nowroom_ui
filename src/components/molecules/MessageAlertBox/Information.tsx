import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const MessageAlertBoxInformation: VFC<Props> = ({ type = "information", ...props }) => {
  return <Presenter type={type} {...props} />;
};
