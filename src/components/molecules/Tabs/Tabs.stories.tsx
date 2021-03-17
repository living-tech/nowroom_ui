import { Meta, Story } from "@storybook/react/types-6-0";

import { Text } from "../../atoms/Text/Default";
import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/Tabs",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: "日本語",
      renderPanel: () => (
        <Text size={"xl"} tag={"h2"} weight={"bold"}>
          募集情報（日本語）
        </Text>
      ),
    },
    {
      label: "英語",
      renderPanel: () => (
        <Text size={"xl"} tag={"h2"} weight={"bold"}>
          募集情報（英語）
        </Text>
      ),
    },
  ],
};
