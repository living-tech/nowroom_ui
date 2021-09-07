import { memo, VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const ButtonPurple: VFC<Props> = memo(({ children, color = "purple", visualType = "fill", ...props }) => {
  return (
    <Presenter color={color} visualType={visualType} {...props}>
      {children}
    </Presenter>
  );
});
