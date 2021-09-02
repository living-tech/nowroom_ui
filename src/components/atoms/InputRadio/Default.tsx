import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const InputRadio: VFC<Props> = (props) => {
  console.log('📻 InputRadio');
  
  return <Presenter {...props} />;
};
