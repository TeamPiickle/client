import { useState } from "react";

import CustomFullHeart from "../CustomFullHeart";
import TagsSlider from "../TagsSlider";
import { St } from "./style";

export default function Card() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <St.Card>
      <St.TagsWrapper>
        <TagsSlider tags={["재미", "if충", "if충", "if충", "if충", "if충", "if충", "if충", "if충x"]} />
      </St.TagsWrapper>
      <St.ContentWrapper>우리집공양추르하ㅐ</St.ContentWrapper>
      <St.HeartWrapper onClick={() => setIsBookmarked((prev) => !prev)}>
        <St.IcEmptyHeart />
        {isBookmarked && <CustomFullHeart />}
      </St.HeartWrapper>
    </St.Card>
  );
}
