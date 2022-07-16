import { useState } from "react";

import CustomFullHeart from "../CustomFullHeart";
import TagsSlider from "../TagsSlider";
import { St } from "./style";

interface LoginCheckProps {
  openLoginModalHandler: () => void;
}

export default function Card(props: LoginCheckProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { openLoginModalHandler } = props;
  const handleClickHeart = () => {
    setIsBookmarked((prev) => !prev);
    openLoginModalHandler();
  };

  return (
    <St.Card>
      <St.TagsWrapper>
        <TagsSlider tags={["재미", "if충", "if충", "if충", "if충", "if충", "if충", "if충", "if충x"]} />
      </St.TagsWrapper>
      <St.ContentWrapper>우리집공양추르하ㅐ</St.ContentWrapper>
      <St.HeartWrapper onClick={handleClickHeart}>
        <St.IcEmptyHeart />
        {isBookmarked && <CustomFullHeart />}
      </St.HeartWrapper>
    </St.Card>
  );
}
