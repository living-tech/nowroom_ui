import { VFC } from "react";

import { Presenter, Props } from "./Presenter";

export const EmptyPreviewContainer: VFC<Props> = (props) => {
  return <Presenter {...props} />;
};
