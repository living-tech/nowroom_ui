---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---
import { Meta, Story } from "@storybook/react/types-6-0";

import { <%= category === "atoms" || category === "molecules" ? "Presenter" : component_name %>, Props } from "./<%= category === `atoms` || category === `molecules` ? `Presenter` : `index` %>";

export default {
  component: <%= category === "atoms" || category === "molecules" ? "Presenter" : component_name %>,
  title: "<%= category %>/<%= component_name %>",
} as Meta;

const Template: Story<Props> = (args) => <<%= category === "atoms" || category === "molecules" ? "Presenter" : component_name %> {...args} />;

export const Default = Template.bind({});
