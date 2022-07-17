import { useCategoryLists } from "../../../core/api/main";
import { categoryList } from "../../../core/category/categoryList";
import { St } from "./style";

export default function CategoryContents() {
  const { categoryLists, isLoading, isError } = useCategoryLists();
  // 이걸로 하면돼!!!!! import 받아온 거 파일 없애주고,

  // 아래 gridValue는 core 폴더에 넣어주면 좋을 것 같아요!~
  type gridValueProps = {
    id: number;
    columnStart: number;
    columnEnd: number;
    rowStart: number;
    rowEnd: number;
  };
  const gridValue: gridValueProps[] = [
    {
      id: 1,
      columnStart: 1,
      columnEnd: 2,
      rowStart: 1,
      rowEnd: 6,
    },

    {
      id: 2,
      columnStart: 1,
      columnEnd: 2,
      rowStart: 6,
      rowEnd: 9,
    },

    {
      id: 3,
      columnStart: 1,
      columnEnd: 2,
      rowStart: 9,
      rowEnd: 12,
    },

    {
      id: 4,
      columnStart: 1,
      columnEnd: 2,
      rowStart: 12,
      rowEnd: 15,
    },

    {
      id: 5,
      columnStart: 2,
      columnEnd: 3,
      rowStart: 1,
      rowEnd: 4,
    },

    {
      id: 6,
      columnStart: 2,
      columnEnd: 3,
      rowStart: 4,
      rowEnd: 7,
    },

    {
      id: 7,
      columnStart: 2,
      columnEnd: 3,
      rowStart: 7,
      rowEnd: 12,
    },

    {
      id: 8,
      columnStart: 2,
      columnEnd: 3,
      rowStart: 12,
      rowEnd: 15,
    },
  ];

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
