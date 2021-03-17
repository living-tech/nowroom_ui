import { forwardRef } from "react";

import { Presenter, Props } from "./Presenter";

export const DrawerMenu = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <Presenter {...props} ref={ref} />;
});
