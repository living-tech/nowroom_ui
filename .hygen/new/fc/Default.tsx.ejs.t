---
to: "<%= category === `atoms` || category === `molecules` ? `${abs_path}/Default.tsx` : null %>"
---
import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const <%= component_name %>: FC<Props> = (props) => {
  return <Presenter {...props} />;
};
