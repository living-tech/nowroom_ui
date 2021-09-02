import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const TextMediumGray02: VFC<Props> = memo(({ children, color = "mediumGray02", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
});
