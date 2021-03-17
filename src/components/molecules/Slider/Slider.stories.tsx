import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/Slider",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      alt: "alt",
      path: "https://picsum.photos/400/300",
    },
    {
      alt: "alt",
      path: "https://picsum.photos/400/300",
    },
  ],
};
