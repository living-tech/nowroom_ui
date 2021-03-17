import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const MessageAlertBoxWarning: FC<Props> = ({ type = "warning", ...props }) => {
  return <Presenter type={type} {...props} />;
};
