import { Meta, Story } from "@storybook/react";

import { headingTitles } from "../../../core/main/headingTitles";
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
export const HeadingTitleContainerStory0 = Template.bind({});
HeadingTitleContainerStory0.args = {
  headingTitles: headingTitles[0],
};

export const HeadingTitleContainerStory1 = Template.bind({});
HeadingTitleContainerStory1.args = {
  headingTitles: headingTitles[1],
};

export const HeadingTitleContainerStory2 = Template.bind({});
HeadingTitleContainerStory2.args = {
  headingTitles: headingTitles[2],
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
