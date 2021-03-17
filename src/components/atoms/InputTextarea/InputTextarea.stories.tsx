import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "atoms/InputTextarea",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  any: true,
  id: "test",
  label: "ラベル",
};

export const WithError = Template.bind({});
WithError.args = {
  any: true,
  error: "半角英数字で入力してください",
  id: "test",
  label: "ラベル",
};
