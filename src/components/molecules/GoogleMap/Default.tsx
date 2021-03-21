import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const GoogleMap: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
