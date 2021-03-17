import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/MessageAlertBox",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  description:
    "直前セールを適用した場合、物件詳細の閲覧数が通常よりも50%増加します。予約全体のうち、70%が自動直前セールをオンにしている物件です。",
  title: "自動直前セールはオンにすることをおすすめします",
};
