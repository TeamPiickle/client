import { useCategoryLists } from "../../../core/api/main";
import { headingTitles } from "../../../core/main/headingTitles";
import HeadingTitleContainer from "../../common/HeadingTitleContainer";
import { St } from "./style";

export default function MoodPiickle() {
  const { categoryLists, isLoading, isError } = useCategoryLists();

  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[1]} />
      {categoryLists && (
        <St.CategoryWrapper>
          <St.CategoryOneLine>
            <St.Category aria-label="동아리"></St.Category>
            <St.Category aria-label="커플"></St.Category>
          </St.CategoryOneLine>
          <St.CategoryOneLine>
            <St.Category aria-label="소개팅"></St.Category>
            <St.Category aria-label="SOPT"></St.Category>
          </St.CategoryOneLine>
        </St.CategoryWrapper>
      )}
    </St.Container>
  );
}
