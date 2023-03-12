import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { useCategoryLists } from "../../../core/api/main";
import { sliderIdxState } from "../../../core/atom/slider";
import { routePaths } from "../../../core/routes/path";
import { gridValue } from "../../../util/category/categoryList";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
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
  return (
    <St.FlexContainer>
      <St.CategoryItemContainer>
        {categoryLists &&
          categoryLists.data.slice(0, 8).map((item, index) => (
            <St.CategoryItem
              key={index}
              className={GTM_CLASS_NAME[`mood${item.title}`]}
              columnStart={gridValue[index].columnStart}
              columnEnd={gridValue[index].columnEnd}
              rowStart={gridValue[index].rowStart}
              rowEnd={gridValue[index].rowEnd}
              gradation={item.gradation}
              onClick={() => moveCategory(item._id)}>
              <St.CategoryImoji className={GTM_CLASS_NAME[`mood${item.title}`]}>
                {String.fromCodePoint(parseInt(item.unicode, 16))}
              </St.CategoryImoji>
              <St.CategoryDescription className={GTM_CLASS_NAME[`mood${item.title}`]}>
                {item.content}
              </St.CategoryDescription>
              <St.CategoryTitle className={GTM_CLASS_NAME[`mood${item.title}`]}>{item.title}</St.CategoryTitle>
            </St.CategoryItem>
          ))}
      </St.CategoryItemContainer>
    </St.FlexContainer>
  );
}
