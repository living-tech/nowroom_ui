import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/NavigationTabs",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      href: "/",
      label: "カレンダー",
    },
    {
      href: "/2",
      label: "予約履歴",
    },
    {
      href: "/3",
      label: "メッセージ",
    },
    {
      href: "/4",
      label: "収益管理",
    },
    {
      href: "/5",
      label: "施設設定",
    },
    {
      href: "/6",
      label: "セール設定",
    },
  ],
};
