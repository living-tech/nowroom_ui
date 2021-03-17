import { Meta, Story } from "@storybook/react/types-6-0";

import { Presenter, Props } from "./Presenter";

export default {
  component: Presenter,
  title: "molecules/GoogleMap",
} as Meta;

const initialLatitude = 35.681236;
const initialLongitude = 139.767125;

const Template: Story<Props> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  latitude: initialLatitude,
  longitude: initialLongitude,
};
