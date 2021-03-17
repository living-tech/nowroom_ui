import { forwardRef } from "react";

import { Presenter, Props } from "./Presenter";

export const NavigationTabs = forwardRef<HTMLElement, Props>((props, ref) => {
  return <Presenter {...props} ref={ref} />;
});
