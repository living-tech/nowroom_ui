import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const MessageBox: FC<Props> = (props) => {
  return <Presenter {...props} />;
};
