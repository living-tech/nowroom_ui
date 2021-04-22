import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/Button",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args}>{"ラベル"}</Presenter>;

export const PurpleMd = Template.bind({});
PurpleMd.args = {
  color: "purple",
};

export const PurpleOutlineMd = Template.bind({});
PurpleOutlineMd.args = {
  color: "purple",
  visualType: "outline",
};

export const WhiteMd = Template.bind({});
WhiteMd.args = {
  color: "white",
};

export const PurpleXsWithIcon = Template.bind({});
PurpleXsWithIcon.args = {
  color: "purple",
  iconName: "FiSend",
  size: "md",
};
