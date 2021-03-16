import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "atoms/Avatar",
} as Meta;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: "プロフィール",
  src:
    "https://firebasestorage.googleapis.com/v0/b/now-project-259302.appspot.com/o/public%2Fcommon%2Fdefault%2Fprofile.jpg?alt=media&token=d74b62db-ec52-4a33-a303-26b6c34c35ff",
};
