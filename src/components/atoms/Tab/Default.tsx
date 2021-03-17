import { forwardRef } from "react";

import { Presenter, Props } from "./Presenter";

export const Tab = forwardRef<HTMLLIElement, Props>((props, ref) => {
  return <Presenter {...props} ref={ref} />;
});
