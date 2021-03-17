import { FC } from "react";

import { Presenter, Props } from "./Presenter";

export const EmptyPreviewContainer: FC<Props> = (props) => {
  return <Presenter {...props} />;
};
