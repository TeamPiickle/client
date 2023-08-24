import { routePaths } from "../../../core/routes/path";
import { LocationType } from "../../../types/cardCollection";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import { headingTitles } from "../../../util/main/headingTitles";
import { gridValue } from "../../../util/main/moodPiickle";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import useNavigateCardCollection, {
  NavigateCardCollectionCategoryType,
} from "../../@common/hooks/useNavigateCardCollection";
import { useCategoryLists } from "../hooks/useCategoryLists";
import St from "./style";

export type moodPiickle = {
  _id: string;
  title: string;
  content: string;
  gradation: string;
};

export default function MoodPiickle() {
  const { randomCategoryLists } = useCategoryLists(true);
  const navigateCardCollection = useNavigateCardCollection(LocationType.CATEGORY) as NavigateCardCollectionCategoryType;

  return (
    <St.Container>
      <HeadingTitleContainer
        headingTitles={headingTitles[1]}
        paddingVerticalValue={4}
        routePath={routePaths.Category}
        gtmClassName={GTM_CLASS_NAME.mainMoodPiickleMore}
      />
      <St.CategoryWrapper>
        {randomCategoryLists &&
          randomCategoryLists.slice(0, 4).map((moodPiickle, index) => (
            <St.Category
              key={moodPiickle._id}
              className={GTM_CLASS_NAME[`main${moodPiickle.title}`]}
              columnStart={gridValue[index].columnStart}
              columnEnd={gridValue[index].columnEnd}
              rowStart={gridValue[index].rowStart}
              rowEnd={gridValue[index].rowEnd}
              gradation={moodPiickle.gradation}
              onClick={() => navigateCardCollection(moodPiickle._id, 0)}>
              <St.CategoryImoji className={GTM_CLASS_NAME[`main${moodPiickle.title}`]}>
                {String.fromCodePoint(parseInt(moodPiickle.unicode, 16))}
              </St.CategoryImoji>
              <St.CategoryContent className={GTM_CLASS_NAME[`main${moodPiickle.title}`]}>
                {moodPiickle.content}
              </St.CategoryContent>
              <St.CategoryTitle className={GTM_CLASS_NAME[`main${moodPiickle.title}`]}>
                {moodPiickle.title}
              </St.CategoryTitle>
            </St.Category>
          ))}
      </St.CategoryWrapper>
    </St.Container>
  );
}
