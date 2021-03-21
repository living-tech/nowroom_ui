import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const InputTextarea: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
