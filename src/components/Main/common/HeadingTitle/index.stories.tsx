import { Meta, Story } from "@storybook/react";

import HeadingTitle, { HeadingTitleProps } from ".";

// 스토리북의 폴더
export default {
  title: "Example/Main/HeadingTitle",
  component: HeadingTitle,
  // decorators: [(Story: () => JSX.Element) => <Story />],
} as Meta;

//-----------------------

// Story Template 정의
const Template: Story<HeadingTitleProps> = (args) => {
  return <HeadingTitle {...args} />;
};

// Story1 정의
export const HeadingTitleStory = Template.bind({});
HeadingTitleStory.args = {
  headingTitles: {
    title: "이번 달 Best Piickle",
    content: "한 달 동안 가장 많은 마이피클을 달성한 주제들이에요",
    isMoreBtn: false,
  },
};

// HeadingTitleStory.decorators = [(Story) => <div style={{ margin: '3em' }}><Story/></div>];

// HeadingTitleStory.parameters = {
//   backgrounds: {
//     values: [
//       { name: "lightBlue", value: "lightBlue" },
//       { name: "gray", value: "#eeeeee" },
//     ],
//   },
// };
