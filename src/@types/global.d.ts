declare module "*.css" {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}

declare module "*.scss";

declare module "*.svg" {
  import React = require("react");

  const ReactComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
  const src: typeof ReactComponent;
  export default src;
}
