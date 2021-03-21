import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const Avatar: FC<Props> = (props) => {
  return <Presenter {...props} />;
};