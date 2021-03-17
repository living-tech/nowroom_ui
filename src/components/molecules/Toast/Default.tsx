import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const Toast: FC<Props> = (props) => {
  return <Presenter {...props} />;
};
