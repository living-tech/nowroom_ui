import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "atoms/InputSelectbox",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "id",
  items: [
    {
      label: "ラベル",
      value: "value",
    },
  ],
  label: "ラベル",
};

export const Sm = Template.bind({});
Sm.args = {
  id: "id",
  items: [
    {
      label: "ラベル",
      value: "value",
    },
  ],
  label: "ラベル",
  size: "sm",
};

export const Xs = Template.bind({});
Xs.args = {
  id: "id",
  items: [
    {
      label: "ラベル",
      value: "value",
    },
  ],
  label: "ラベル",
  size: "xs",
};
