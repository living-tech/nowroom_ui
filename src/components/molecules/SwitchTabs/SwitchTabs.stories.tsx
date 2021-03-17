import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/SwitchTabs",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  activeValue: 1,
  items: [
    { label: "1ヶ月", value: 1 },
    { label: "6ヶ月", value: 6 },
    { label: "1年", value: 12 },
    { label: "2年10ヶ月10日", value: 22 },
  ],
  onClick: (value: string | number) => console.log(value),
};
