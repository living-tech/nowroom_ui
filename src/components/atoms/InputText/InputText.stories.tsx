import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "atoms/InputText",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  any: true,
  id: "test",
  label: "ラベル",
};

export const WithUnit = Template.bind({});
WithUnit.args = {
  any: true,
  id: "test",
  label: "人数",
  unit: "人",
};

export const WithError = Template.bind({});
WithError.args = {
  any: true,
  error: "半角英数字で入力してください",
  id: "test",
  label: "ラベル",
};

export const White = Template.bind({});
White.args = {
  color: "white",
  id: "test",
  placeholder: "テキストを入力してください",
};

export const WhiteWithIcon = Template.bind({});
WhiteWithIcon.args = {
  color: "white",
  iconName: "FiSearch",
  id: "test",
  placeholder: "テキストを入力してください",
};

export const Md = Template.bind({});
Md.args = {
  any: true,
  iconName: "FiSearch",
  id: "test",
  label: "人数",
  unit: "人",
};

export const Sm = Template.bind({});
Sm.args = {
  any: true,
  iconName: "FiUser",
  id: "test",
  label: "人数",
  size: "sm",
  unit: "人",
};

export const Xs = Template.bind({});
Xs.args = {
  any: true,
  iconName: "FiSearch",
  id: "test",
  label: "人数",
  size: "xs",
  unit: "人",
};

export const Xxs = Template.bind({});
Xxs.args = {
  any: true,
  iconName: undefined,
  id: "test",
  label: "人数",
  size: "xxs",
  unit: "人",
};
