import { useEffect, useState } from "react";

import { headingTitles } from "../../../core/main/headingTitles";
import { CategoryList } from "../../../types/main";
import HeadingTitleContainer from "../../common/HeadingTitleContainer";
import { St } from "./style";

export default function MoodPiickle() {
  const [categoryLists, setCategoryLists] = useState<CategoryList[]>([]);

  return (
    <St.Container>
      <HeadingTitleContainer headingTitles={headingTitles[1]} />
      <St.CategoryWrapper>
        <St.CategoryOneLine>
          <St.Category></St.Category>
          <St.Category></St.Category>
        </St.CategoryOneLine>
        <St.CategoryOneLine>
          <St.Category></St.Category>
          <St.Category></St.Category>
        </St.CategoryOneLine>
      </St.CategoryWrapper>
    </St.Container>
  );
}
