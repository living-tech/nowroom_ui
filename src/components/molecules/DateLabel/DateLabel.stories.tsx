import { Meta, Story } from "@storybook/react/types-6-0";
import dayjs from "dayjs";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/DateLabel",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: dayjs(),
};
