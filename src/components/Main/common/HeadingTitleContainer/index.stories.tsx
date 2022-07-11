import { Meta, Story } from "@storybook/react";

import HeadingTitleContainer, { HeadingTitleContainerProps } from ".";

// 스토리북의 폴더
export default {
  title: "Example/Main/HeadingTitleContainer",
  component: HeadingTitleContainer,
  // decorators: [(Story: () => JSX.Element) => <Story />],
} as Meta;

//-----------------------

// Story Template 정의
const Template: Story<HeadingTitleContainerProps> = (args) => {
  return <HeadingTitleContainer {...args} />;
};

// Story1 정의
export const HeadingTitleContainerStory = Template.bind({});
HeadingTitleContainerStory.args = {
  headingTitles: {
    title: "이번 달 Best Piickle",
    content: "한 달 동안 가장 많은 마이피클을 달성한 주제들이에요",
    isMoreBtn: false,
  },
};

// HeadingTitleContainerStory.decorators = [(Story) => <div style={{ margin: '3em' }}><Story/></div>];

// HeadingTitleContainerStory.parameters = {
//   backgrounds: {
//     values: [
//       { name: "lightBlue", value: "lightBlue" },
//       { name: "gray", value: "#eeeeee" },
//     ],
//   },
// };
