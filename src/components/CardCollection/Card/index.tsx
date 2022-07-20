import { useState } from "react";

import { real } from "../../../core/api/cardCollection";
import { CardList } from "../../../types/cardCollection";
import CustomFullHeart from "../CustomFullHeart";
import TagsSlider from "../TagsSlider";
import { St } from "./style";

interface LoginCheckProps {
  cardList: CardList;
  openLoginModalHandler: () => void;
}

export default function Card(props: LoginCheckProps) {
  const { cardList, openLoginModalHandler } = props;
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClickHeart = (_id: string) => {
    switch (LOGIN_STATE) {
      case true:
        setIsBookmarked((prev) => !prev);
        real.addNDeleteBookmark(_id);
        break;
      case false:
        openLoginModalHandler();
        break;
    }
  };

  return (
    <St.Card>
      <St.TagsWrapper>
        <TagsSlider tags={cardList.tags} />
      </St.TagsWrapper>
      <St.ContentWrapper>{cardList.content}</St.ContentWrapper>
      <St.HeartWrapper onClick={() => handleClickHeart(cardList._id)} aria-label="북마크" role="dialog">
        <St.IcEmptyHeart />
        {isBookmarked && <CustomFullHeart />}
      </St.HeartWrapper>
    </St.Card>
  );
}
