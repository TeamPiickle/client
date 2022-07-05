import { Meta, Story } from "@storybook/react";

import ExampleInput, { ExampleInputProps } from ".";

// 스토리북의 폴더
export default {
  title: "Example/input",
  component: ExampleInput,
  decorators: [(Story: () => JSX.Element) => <Story />],
} as Meta;

//-----------------------

// Story Template 정의
const Template: Story<ExampleInputProps> = (args) => {
  return <ExampleInput {...args} />;
};

// Story1 정의
export const MyComponentStory2 = Template.bind({});
MyComponentStory2.args = {
  name: "",
};

// MyComponentStory2.decorators = [(Story) => <div style={{ margin: '3em' }}><Story/></div>];

MyComponentStory2.parameters = {
  backgrounds: {
    values: [
      { name: "lightBlue", value: "lightBlue" },
      { name: "gray", value: "#eeeeee" },
    ],
  },
};

// MyComponentStory2.storyName = "ChangedStoryName";
