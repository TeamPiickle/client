import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { useCategoryLists } from "../../../core/api/main";
import { sliderIdxState } from "../../../core/atom/slider";
import { gridValue } from "../../../core/category/categoryList";
import Loading from "../../common/Loading";
import { St } from "./style";

export default function CategoryContents() {
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const { categoryLists } = useCategoryLists();

  const navigate = useNavigate();

  const moveCategory = (id: string) => {
    navigate("/card-collection", { state: { type: "category", categoryId: id } });
    setSliderIdx(0);
  };
  console.log(categoryLists);

  if (categoryLists?.data === undefined) return <Loading backgroundColor="transparent" />;
  else
    return (
      <St.FlexContainer>
        <St.CategoryItemContainer>
          {categoryLists.data.slice(0, 8).map((item, index) => {
            return (
              <St.CategoryItem
                key={index}
                columnStart={gridValue[index].columnStart}
                columnEnd={gridValue[index].columnEnd}
                rowStart={gridValue[index].rowStart}
                rowEnd={gridValue[index].rowEnd}
                onClick={() => moveCategory(item._id)}
                imgUrl={item.imgurl}>
                <St.CategoryTitle>{item.title}</St.CategoryTitle>
                <St.CategoryDescription>{item.content}</St.CategoryDescription>
              </St.CategoryItem>
            );
          })}
        </St.CategoryItemContainer>
      </St.FlexContainer>
    );
}
