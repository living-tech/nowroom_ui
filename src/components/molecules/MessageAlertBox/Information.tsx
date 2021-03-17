import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const MessageAlertBoxInformation: FC<Props> = ({ type = "information", ...props }) => {
  return <Presenter type={type} {...props} />;
};
