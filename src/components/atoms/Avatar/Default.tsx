import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const Avatar: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
