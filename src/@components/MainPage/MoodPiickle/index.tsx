import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { sliderIdxState } from "../../../core/atom/slider";
import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import { headingTitles } from "../../../util/main/headingTitles";
import { gridValue } from "../../../util/main/moodPiickle";
import HeadingTitleContainer from "../../@common/HeadingTitleContainer";
import { useCategoryLists } from "../hooks/useCategoryLists";
import St from "./style";

export type moodPiickle = {
  _id: string;
  title: string;
  content: string;
  gradation: string;
};

export default function MoodPiickle() {
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const { randomCategoryLists } = useCategoryLists();

  const navigate = useNavigate();
  const moveCategory = (id: string) => {
    navigate(routePaths.CardCollection, { state: { type: "category", categoryId: id } });
    setSliderIdx(0);
  };

  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[1]} />
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
              onClick={() => moveCategory(moodPiickle._id)}>
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
