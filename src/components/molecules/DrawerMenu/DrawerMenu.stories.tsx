import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/DrawerMenu",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: "ラベル1",
      value: "value",
    },
    {
      label: "ラベル2",
      value: "value",
    },
    {
      label: "ラベル3",
      value: "value",
    },
    {
      label: "ラベル4",
      value: "value",
    },
  ],
};
