import { useState } from "react";

import CustomFullHeart from "../CustomFullHeart";
import TagsSlider from "../TagsSlider";
import { St } from "./style";

interface LoginCheckProps {
  openHandler: () => void;
}

export default function Card(props: LoginCheckProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { openHandler } = props;
  const clickHandle = () => {
    setIsBookmarked((prev) => !prev);
    openHandler();
  };

  return (
    <St.Card>
      <St.TagsWrapper>
        <TagsSlider tags={["재미", "if충", "if충", "if충", "if충", "if충", "if충", "if충", "if충x"]} />
      </St.TagsWrapper>
      <St.ContentWrapper>우리집공양추르하ㅐ</St.ContentWrapper>
      <St.HeartWrapper onClick={() => clickHandle()}>
        <St.IcEmptyHeart />
        {isBookmarked && <CustomFullHeart />}
      </St.HeartWrapper>
    </St.Card>
  );
}
