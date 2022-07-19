import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { useCategoryLists } from "../../../core/api/main";
import { sliderIdxState } from "../../../core/atom/slider";
import { gridValue } from "../../../core/category/categoryList";
import { St } from "./style";

type categoryType = {
  id: string;
  title: string;
  content: string;
};

export default function CategoryContents() {
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const { categoryLists, isLoading, isError } = useCategoryLists();

  const navigate = useNavigate();
  const moveCategory = (id: number) => {
    navigate("/card-collection", { state: { type: "category", categoryId: id } });
    setSliderIdx(0);
  };

  return (
    <St.FlexContainer>
      <St.CategoryItemContainer>
        {categoryLists &&
          categoryLists.data.map((item: categoryType, index: number) => {
            return (
              <St.CategoryItem
                key={index}
                columnStart={gridValue[index].columnStart}
                columnEnd={gridValue[index].columnEnd}
                rowStart={gridValue[index].rowStart}
                rowEnd={gridValue[index].rowEnd}
                onClick={() => moveCategory(gridValue[index].id)}>
                <St.CategoryTitle>{item.title}</St.CategoryTitle>
                <St.CategoryDescription>{item.content}</St.CategoryDescription>
              </St.CategoryItem>
            );
          })}
      </St.CategoryItemContainer>
    </St.FlexContainer>
  );
}
