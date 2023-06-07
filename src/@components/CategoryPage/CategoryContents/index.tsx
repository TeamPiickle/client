import { LocationType } from "../../../types/cardCollection";
import { gridValue } from "../../../util/category/categoryList";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useNavigateCardCollection, {
  NavigateCardCollectionCategoryType,
} from "../../@common/hooks/useNavigateCardCollection";
import { useCategoryLists } from "../../MainPage/hooks/useCategoryLists";
import { St } from "./style";

export default function CategoryContents() {
  const { categoryLists } = useCategoryLists();
  const navigateCardCollection = useNavigateCardCollection(LocationType.CATEGORY) as NavigateCardCollectionCategoryType;

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
              onClick={() => navigateCardCollection(item._id)}>
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
