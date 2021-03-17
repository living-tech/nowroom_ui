import { Meta, Story } from "@storybook/react/types-6-0";

import { Text } from "../../atoms/Text/Default";
import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/TableRow",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: () => <Text size={"xs"}>Content</Text>,
  title: "Title",
};
