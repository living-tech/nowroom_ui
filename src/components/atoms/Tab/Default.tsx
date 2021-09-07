import { forwardRef, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const Tab = memo(
  forwardRef<HTMLLIElement, Props>((props, ref) => {
    return <Presenter {...props} ref={ref} />;
  })
);
