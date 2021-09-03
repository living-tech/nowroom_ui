import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const InputText: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
