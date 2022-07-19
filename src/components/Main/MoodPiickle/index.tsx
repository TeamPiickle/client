import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { useCategoryLists } from "../../../core/api/main";
import { sliderIdxState } from "../../../core/atom/slider";
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
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const { categoryLists, isLoading, isError } = useCategoryLists();

  const navigate = useNavigate();

  const moveCategory = (id: string) => {
    navigate("/card-collection", { state: { type: "category", categoryId: id } });
    setSliderIdx(0);
  };

  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[1]} />
      <St.CategoryWrapper>
        {categoryLists &&
          categoryLists.data.slice(0, 4).map((moodPiickle) => (
            <St.CategoryOneLine key={moodPiickle._id}>
              <St.Category onClick={() => moveCategory(moodPiickle._id)}>
                <St.CategoryTitle>{moodPiickle.title}</St.CategoryTitle>
                <St.CategoryContent>{moodPiickle.content}</St.CategoryContent>
              </St.Category>
            </St.CategoryOneLine>
          ))}
      </St.CategoryWrapper>
    </St.Container>
  );
}
