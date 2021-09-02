import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const InputCheckbox: VFC<Props> = memo((props) => {
  return <Presenter {...props} />;
});
