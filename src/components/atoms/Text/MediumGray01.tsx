import { VFC, memo } from "react";

import { Presenter, Props } from "./Presenter";

export const TextMediumGray01: VFC<Props> = memo(({ children, color = "mediumGray01", ...props }) => {
  return (
    <Presenter color={color} {...props}>
      {children}
    </Presenter>
  );
});
