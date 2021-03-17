import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const CalendarCell: FC<Props> = (props) => {
  return <Presenter {...props} />;
};
