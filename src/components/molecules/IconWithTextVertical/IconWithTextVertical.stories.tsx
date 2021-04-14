import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/IconWithTextVertical",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Md = Template.bind({});
Md.args = {
  iconName: "FiAperture",
  label: "ラベル",
};

export const Sm = Template.bind({});
Sm.args = {
  iconName: "FiMenu",
  label: "ラベル",
  size: "sm",
};
