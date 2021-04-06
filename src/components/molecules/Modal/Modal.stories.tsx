import { Meta, Story } from "@storybook/react/types-6-0";

import { Text } from "../../../../lib";
import { ButtonPurple } from "../Button/Purple";
import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/Modal",
} as Meta;

const Template: Story<Props> = (args) => (
  <Presenter {...args}>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
    <Text>test</Text>
  </Presenter>
);

export const Default = Template.bind({});
Default.args = {
  isVisible: false,
  renderFixedBottom: () => <ButtonPurple>ボタン</ButtonPurple>,
};
