import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "atoms/NavigationDrawerMenuItem",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Href = Template.bind({});
Href.args = {
  item: {
    href: "/1",
    label: "プロフィール編集",
  },
};

export const OnClick = Template.bind({});
OnClick.args = {
  item: {
    danger: true,
    label: "ログアウト",
    onClick: () => console.log("logout"),
  },
};
