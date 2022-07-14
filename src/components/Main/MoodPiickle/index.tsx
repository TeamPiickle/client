import { headingTitles } from "../../../core/main/headingTitles";
import HeadingTitleContainer from "../common/HeadingTitleContainer";
import { St } from "./style";

export default function MoodPiickle() {
  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[1]} />
      <St.CategoryWrapper>
        <St.CategoryOneLine>
          <St.Category></St.Category>
          <St.Category></St.Category>
        </St.CategoryOneLine>
        <St.CategoryOneLine>
          <St.Category></St.Category>
          <St.Category></St.Category>
        </St.CategoryOneLine>
      </St.CategoryWrapper>
    </St.Container>
  );
}
