import { Meta, Story } from "@storybook/react/types-6-0";
import { ImageLoaderProps } from "next/image";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "v2/atoms/Image",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

const imageLoaderMock = ({ src }: ImageLoaderProps) => {
  return `${src}`;
};

export const Default = Template.bind({});
Default.args = {
  height: "160",
  loader: imageLoaderMock,
  src: "https://picsum.photos/400/300",
  width: "160",
};
