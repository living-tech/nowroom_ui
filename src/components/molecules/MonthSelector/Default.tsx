import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const MonthSelector: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
