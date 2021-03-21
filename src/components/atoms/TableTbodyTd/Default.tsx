import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const TableTbodyTd: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
