---
to: "<%= category === `atoms` || category === `molecules` ? `${abs_path}/Default.tsx` : null %>"
---
import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const <%= component_name %>: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
