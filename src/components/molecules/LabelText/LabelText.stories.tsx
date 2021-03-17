import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/LabelText",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args}>ラベル</Presenter>;

export const Pink = Template.bind({});
Pink.args = {
  color: "pink",
};

export const Cyan = Template.bind({});
Cyan.args = {
  color: "cyan",
};

export const Blue = Template.bind({});
Blue.args = {
  color: "blue",
};

export const White = Template.bind({});
White.args = {
  color: "white",
};
