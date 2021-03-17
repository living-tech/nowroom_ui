import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/InputSelectChips",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: "ラベル1",
      value: "value1",
    },
    {
      label: "ラベル2",
      value: "value2",
    },
    {
      label: "ラベル3",
      value: "value3",
    },
    {
      label: "ラベル4",
      value: "value4",
    },
    {
      label: "ラベル5",
      value: "value5",
    },
    {
      label: "ラベル6",
      value: "value6",
    },
    {
      label: "ラベル7",
      value: "value7",
    },
    {
      label: "ラベル8",
      value: "value8",
    },
    {
      label: "ラベル9",
      value: "value9",
    },
    {
      label: "ラベル10",
      value: "value10",
    },
    {
      label: "ラベル11",
      value: "value11",
    },
    {
      label: "ラベル12",
      value: "value12",
    },
  ],
  label: "ラベル",
  selectedLabel: "選択中ラベル",
  style: {
    marginBottom: 400,
  },
  unselectedLabel: "未選択ラベル",
};
