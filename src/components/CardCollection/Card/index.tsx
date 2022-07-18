import { useState } from "react";

import { CardIdList } from "../../../types/cardCollection";
import CustomFullHeart from "../CustomFullHeart";
import TagsSlider from "../TagsSlider";
import { St } from "./style";

interface LoginCheckProps {
  cardIdList: CardIdList;
  openLoginModalHandler: () => void;
}

export default function Card(props: LoginCheckProps) {
  const { cardIdList, openLoginModalHandler } = props;

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClickHeart = () => {
    setIsBookmarked((prev) => !prev);
    openLoginModalHandler();
  };

  return (
    <St.Card>
      <St.TagsWrapper>
        <TagsSlider tags={cardIdList.tags} />
      </St.TagsWrapper>
      <St.ContentWrapper>{cardIdList.content}</St.ContentWrapper>
      <St.HeartWrapper onClick={handleClickHeart}>
        <St.IcEmptyHeart />
        {isBookmarked && <CustomFullHeart />}
      </St.HeartWrapper>
    </St.Card>
  );
}
