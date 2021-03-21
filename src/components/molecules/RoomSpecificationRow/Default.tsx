import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const RoomSpecificationRow: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
