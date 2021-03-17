import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const IconButton: FC<Props> = ({ children, visualType = "fill", ...props }) => {
  return (
    <Presenter visualType={visualType} {...props}>
      {children}
    </Presenter>
  );
};
