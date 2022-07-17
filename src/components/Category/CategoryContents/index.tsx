import { useCategoryLists } from "../../../core/api/main";
import { categoryList, gridValue } from "../../../core/category/categoryList";
import { St } from "./style";

export default function CategoryContents() {
  const { categoryLists, isLoading, isError } = useCategoryLists();
  // 이걸로 하면돼!!!!! import 받아온 거 파일 없애주고,

  // 아래 gridValue는 core 폴더에 넣어주면 좋을 것 같아요!~

  return (
    <St.FlexContainer>
      <St.CategoryItemContainer>
        {categoryList.map((item, index) => {
          return (
            <St.CategoryItem
              key={item.id}
              columnStart={gridValue[index].columnStart}
              columnEnd={gridValue[index].columnEnd}
              rowStart={gridValue[index].rowStart}
              rowEnd={gridValue[index].rowEnd}>
              <St.CategoryTitle>{item.title}</St.CategoryTitle>
              <St.CategoryDescription>{item.content}</St.CategoryDescription>
            </St.CategoryItem>
          );
        })}
      </St.CategoryItemContainer>
    </St.FlexContainer>
  );
}
