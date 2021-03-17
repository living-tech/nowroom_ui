import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const MessageAlertBoxSuccess: FC<Props> = ({ type = "success", ...props }) => {
  return <Presenter type={type} {...props} />;
};
