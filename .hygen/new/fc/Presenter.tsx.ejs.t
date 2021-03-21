---
to: "<%= abs_path %>/<%= category === `atoms` || category === `molecules` ? `Presenter.tsx` : `index.tsx` %>"
---
import { CSSProperties, VFC } from "react";

<% if (have_style) { -%>
import styles from "./<%= component_name %>.module.scss";
<% } -%>

export type Props = {
  className?: string;
  style?: CSSProperties;
};

export const <%= category === `atoms` || category === `molecules` ? `Presenter` : component_name %>: VFC<Props> = ({ className, style }) => {
<% if (have_style) { -%>
  return <div className={`${styles.container} ${className}`} style={style}></div>;
<% } else { -%>
  return <div className={`${className}`} style={style}></div>;
<% } -%>
};
