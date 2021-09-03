import { memo, VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const InputRadio: VFC<Props> = memo((props) => {  
  return <Presenter {...props} />;
});
