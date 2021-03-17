import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/InputRadios",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "ラベル", value: "value01" },
    { label: "ラベル", value: "value02" },
    { label: "ラベル", value: "value03" },
  ],
  label: "ラベル",
  name: "name",
};
