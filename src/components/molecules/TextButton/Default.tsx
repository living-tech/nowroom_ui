import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TextButton: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
