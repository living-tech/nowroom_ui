import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const CalendarCell: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
