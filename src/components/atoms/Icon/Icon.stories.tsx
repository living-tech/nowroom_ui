import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "atoms/Icon",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Black = Template.bind({});
Black.args = {
  color: "black",
  name: "AirCon",
};

export const DarkGray02 = Template.bind({});
DarkGray02.args = {
  color: "darkGray02",
  name: "AirCon",
};

export const DarkGray01 = Template.bind({});
DarkGray01.args = {
  color: "darkGray01",
  name: "AirCon",
};

export const MediumGray02 = Template.bind({});
MediumGray02.args = {
  color: "mediumGray02",
  name: "AirCon",
};

export const MediumGray01 = Template.bind({});
MediumGray01.args = {
  color: "mediumGray01",
  name: "AirCon",
};

export const LightGray02 = Template.bind({});
LightGray02.args = {
  color: "lightGray02",
  name: "AirCon",
};

export const LightGray01 = Template.bind({});
LightGray01.args = {
  color: "lightGray01",
  name: "AirCon",
};

export const White = Template.bind({});
White.args = {
  color: "white",
  name: "AirCon",
};

export const Purple = Template.bind({});
Purple.args = {
  color: "purple",
  name: "AirCon",
};

export const Cyan = Template.bind({});
Cyan.args = {
  color: "cyan",
  name: "AirCon",
};

export const Yellow = Template.bind({});
Yellow.args = {
  color: "yellow",
  name: "AirCon",
};
