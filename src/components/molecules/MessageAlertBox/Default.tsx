import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const MessageAlertBox: FC<Props> = (props) => {
  return <Presenter {...props} />;
};
