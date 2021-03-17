import { Meta, Story } from "@storybook/react/types-6-0";
import { ChangeEvent } from "react";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/InputImage",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrls: ["https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"],
  label: "キッチン",
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => {
    console.table(event);
  },
};
