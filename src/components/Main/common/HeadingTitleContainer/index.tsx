import { HeadingTitle } from "../../../../core/main/headingTitles";
import { St } from "./style";

export interface HeadingTitleContainerProps {
  headingTitles: HeadingTitle;
}

export default function HeadingTitleContainer(props: HeadingTitleContainerProps) {
  const { headingTitles } = props;

  return (
    <St.Wrapper>
      <St.Title>{headingTitles.title}</St.Title>
      <St.Content>{headingTitles.content}</St.Content>
    </St.Wrapper>
  );
}
