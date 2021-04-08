import { Meta, Story } from "@storybook/react/types-6-0";
import { ChangeEvent } from "react";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/InputCheckboxes",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "ラベル", value: "value01" },
    { label: "ラベル", value: "value02" },
    { label: "ラベル", value: "value03" },
    { label: "ラベル", value: "value04" },
    { label: "ラベル", value: "value05" },
    { label: "ラベル", value: "value06" },
    { label: "ラベル", value: "value07" },
    { label: "ラベル", value: "value08" },
    { label: "ラベル", value: "value09" },
    { label: "ラベル", value: "value10" },
  ],
  label: "ラベル",
  name: "name",
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  },
};
