import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const Modal: FC<Props> = (props) => {
  return <Presenter {...props} />;
};
