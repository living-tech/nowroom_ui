import { Meta, Story } from "@storybook/react/types-6-0";

import { Text } from "../../atoms/Text/Default";
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
  closeButtonPosition: "bottom",
  isVisible: true,
};

export const withFixedBottom = Template.bind({});
withFixedBottom.args = {
  closeButtonPosition: "top",
  isVisible: true,
  renderFixedBottom: () => <ButtonPurple>ボタン</ButtonPurple>,
};

export const maxWidthMin = Template.bind({});
maxWidthMin.args = {
  closeButtonPosition: "top",
  isVisible: true,
  maxWidth: 320,
};

export const loading = Template.bind({});
loading.args = {
  closeButtonPosition: "bottom",
  isVisible: true,
  loading: true,
};
