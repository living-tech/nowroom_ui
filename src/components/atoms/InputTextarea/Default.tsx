import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const InputTextarea: VFC<Props> = memo((props) => {
  return <Presenter {...props} />;
});
