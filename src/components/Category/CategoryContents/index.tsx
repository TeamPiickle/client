import { useEffect, useState } from "react";

import { useCategoryLists } from "../../../core/api/main";
import { categoryList, gridValue } from "../../../core/category/categoryList";
import { St } from "./style";

export default function CategoryContents() {
  type categoryType = {
    id: string;
    title: string;
    content: string;
  };
  const { categoryLists, isLoading, isError } = useCategoryLists();
  // 이걸로 하면돼!!!!! import 받아온 거 파일 없애주고,

  return (
    <St.FlexContainer>
      <St.CategoryItemContainer>
        {categoryLists &&
          categoryLists.data.map((item: any, index: any) => {
            return (
              <St.CategoryItem
                key={index}
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
