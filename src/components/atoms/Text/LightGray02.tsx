import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const TextLightGray02: VFC<Props> = memo(({ children, color = "lightGray02", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
});
