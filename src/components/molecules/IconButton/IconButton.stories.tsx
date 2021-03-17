import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/IconButton",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Purple = Template.bind({});
Purple.args = {
  color: "purple",
  iconName: "FiMoreVertical",
};

export const PurpleOutline = Template.bind({});
PurpleOutline.args = {
  color: "purple",
  iconName: "FiMoreVertical",
  visualType: "outline",
};

export const White = Template.bind({});
White.args = {
  color: "white",
  iconName: "FiMoreVertical",
};
