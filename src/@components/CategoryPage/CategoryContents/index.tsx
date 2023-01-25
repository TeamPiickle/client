import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { useCategoryLists } from "../../../core/api/main";
import { sliderIdxState } from "../../../core/atom/slider";
import { gridValue } from "../../../core/category/categoryList";
import { routePaths } from "../../../core/routes/path";
import Loading from "../../@common/Loading";
import { St } from "./style";

export default function CategoryContents() {
  const setSliderIdx = useSetRecoilState(sliderIdxState);
  const { categoryLists } = useCategoryLists();

  const navigate = useNavigate();

  const moveCategory = (id: string) => {
    navigate(routePaths.CardCollection, { state: { type: "category", categoryId: id } });
    setSliderIdx(0);
  };
  if (categoryLists?.data === undefined) return <Loading backgroundColor="transparent" />;
  else
    return (
      <St.FlexContainer>
        <St.CategoryItemContainer>
          {categoryLists &&
            categoryLists.data.slice(0, 8).map((item, index) => {
              return (
                <St.CategoryItem
                  key={index}
                  columnStart={gridValue[index].columnStart}
                  columnEnd={gridValue[index].columnEnd}
                  rowStart={gridValue[index].rowStart}
                  rowEnd={gridValue[index].rowEnd}
                  onClick={() => moveCategory(item._id)}
                  gradation={item.gradation}
                  className={`GTM_item_${item.title.slice(0, 4)}`}>
                  <St.CategoryImoji>{`${String.fromCodePoint(parseInt(item.unicode, 16))}`}</St.CategoryImoji>
                  <St.CategoryDescription className={`GTM_${item.content.slice(0, 4)}`}>
                    {item.content}
                  </St.CategoryDescription>
                  <St.CategoryTitle className={`GTM_${item.title.slice(0, 4)}`}>{item.title}</St.CategoryTitle>
                </St.CategoryItem>
              );
            })}
        </St.CategoryItemContainer>
      </St.FlexContainer>
    );
}
