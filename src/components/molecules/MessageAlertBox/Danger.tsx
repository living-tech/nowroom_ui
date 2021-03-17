import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const MessageAlertBoxDanger: FC<Props> = ({ type = "danger", ...props }) => {
  return <Presenter type={type} {...props} />;
};
