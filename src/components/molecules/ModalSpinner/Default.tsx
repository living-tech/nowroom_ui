import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const ModalSpinner: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
