import { Meta, Story } from "@storybook/react";

import ExampleButton from ".";

// 스토리북의 폴더
export default {
  title: "Example/Button/Main",
  component: ExampleButton,
  decorators: [(Story: () => JSX.Element) => <Story />],
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
} as Meta;

//-----------------------

// Story Template 정의
const Template: Story = (args) => {
  return <ExampleButton {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "😄👍😍💯",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "📚📕📈🤓",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "button",
};
