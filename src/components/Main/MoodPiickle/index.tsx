import { useCategoryLists } from "../../../core/api/main";
import { headingTitles } from "../../../core/main/headingTitles";
import HeadingTitleContainer from "../../common/HeadingTitleContainer";
import { St } from "./style";

export type moodPiickle = {
  _id: string;
  title: string;
  content: string;
  imgurl: string;
};

export default function MoodPiickle() {
  const { categoryLists, isLoading, isError } = useCategoryLists();

  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[1]} />
      <St.CategoryWrapper>
        {categoryLists &&
          categoryLists.data.slice(0, 4).map((moodPiickle: moodPiickle) => (
            <St.CategoryOneLine key={moodPiickle._id}>
              <St.Category>
                <St.CategoryTitle>{moodPiickle.title}</St.CategoryTitle>
                <St.CategoryContent>{moodPiickle.content}</St.CategoryContent>
              </St.Category>
            </St.CategoryOneLine>
          ))}
      </St.CategoryWrapper>
    </St.Container>
  );
}
