import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const Tabs: VFC<Props> = memo((props) => {
  return <Presenter {...props} />;
});
