import { forwardRef } from "react";

import { Presenter, Props } from "./Presenter";

export const NavigationTab = forwardRef<HTMLLIElement, Props>((props, ref) => {
  return <Presenter {...props} ref={ref} />;
});
