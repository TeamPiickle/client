import { useState } from "react";

import CustomFullHeart from "./CustomFullHeart";
import { St } from "./style";
import Tag from "./Tag";

export default function CardCollection() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <St.MainPage>
      <St.Card>
        <St.TagsWrapper>
          <Tag>sdfasf</Tag>
        </St.TagsWrapper>
        <St.ContentWrapper>우리집공양추르하ㅐ</St.ContentWrapper>
        <St.HeartWrapper onClick={() => setIsBookmarked((prev) => !prev)}>
          <St.IcEmptyHeart />
          {isBookmarked && <CustomFullHeart />}
        </St.HeartWrapper>
      </St.Card>
      <St.IcFilterBtn />
    </St.MainPage>
  );
}
