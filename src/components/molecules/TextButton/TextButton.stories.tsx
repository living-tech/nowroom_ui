import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/TextButton",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args}>ラベル</Presenter>;

export const Default = Template.bind({});
