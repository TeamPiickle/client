import { Meta, Story } from "@storybook/react";

import CTABtn from ".";

// 스토리북의 폴더
export default {
  title: "Example/Main/CTABtn",
  component: CTABtn,
  decorators: [(Story: () => JSX.Element) => <Story />],
} as Meta;

//-----------------------

// Story Template 정의
const Template: Story = () => {
  return <CTABtn />;
};

// Story1 정의
export const CTABtnStory = Template.bind({});
