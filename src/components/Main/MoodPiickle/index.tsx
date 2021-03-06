import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { useCategoryLists } from "../../../core/api/main";
import { sliderIdxState } from "../../../core/atom/slider";
import { headingTitles } from "../../../core/main/headingTitles";
import { gridValue } from "../../../core/main/moodPiickle";
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
  const { categoryLists } = useCategoryLists();

  const navigate = useNavigate();
  const moveCategory = (id: string) => {
    navigate("/card-collection", { state: { type: "category", categoryId: id } });
    setSliderIdx(0);
  };

  const shuffle = () => Math.random() - 0.5;
  const randomCategory = categoryLists && [...categoryLists.data].sort(shuffle);

  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[1]} />
      <St.CategoryWrapper>
        {randomCategory &&
          randomCategory.slice(0, 4).map((moodPiickle, index) => (
            <St.Category
              key={moodPiickle._id}
              onClick={() => moveCategory(moodPiickle._id)}
              imgUrl={moodPiickle.imgurl}
              columnStart={gridValue[index].columnStart}
              columnEnd={gridValue[index].columnEnd}
              rowStart={gridValue[index].rowStart}
              rowEnd={gridValue[index].rowEnd}>
              <St.CategoryTitle>{moodPiickle.title}</St.CategoryTitle>
              <St.CategoryContent>{moodPiickle.content}</St.CategoryContent>
            </St.Category>
          ))}
      </St.CategoryWrapper>
    </St.Container>
  );
}
