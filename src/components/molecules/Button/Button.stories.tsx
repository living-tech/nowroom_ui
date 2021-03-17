import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/Button",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args}>{"ラベル"}</Presenter>;

export const Purple = Template.bind({});
Purple.args = {
  color: "purple",
};

export const PurpleOutline = Template.bind({});
PurpleOutline.args = {
  color: "purple",
  visualType: "outline",
};

export const White = Template.bind({});
White.args = {
  color: "white",
};
