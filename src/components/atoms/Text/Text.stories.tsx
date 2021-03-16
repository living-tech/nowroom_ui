import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "atoms/Text",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args}>{"ラベル"}</Presenter>;

export const Black = Template.bind({});
Black.args = {
  color: "black",
};

export const DarkGray02 = Template.bind({});
DarkGray02.args = {
  color: "darkGray02",
};

export const DarkGray01 = Template.bind({});
DarkGray01.args = {
  color: "darkGray01",
};

export const MediumGray01 = Template.bind({});
MediumGray01.args = {
  color: "mediumGray01",
};

export const LightGray02 = Template.bind({});
LightGray02.args = {
  color: "lightGray02",
};

export const LightGray01 = Template.bind({});
LightGray01.args = {
  color: "lightGray01",
};

export const White = Template.bind({});
White.args = {
  color: "white",
};

export const Purple = Template.bind({});
Purple.args = {
  color: "purple",
};

export const Cyan = Template.bind({});
Cyan.args = {
  color: "cyan",
};

export const Yellow = Template.bind({});
Yellow.args = {
  color: "yellow",
};
