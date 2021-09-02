import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const InputText: VFC<Props> = memo((props) => {
  return <Presenter {...props} />;
});
