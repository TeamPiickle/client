import { useState } from "react";

import { real } from "../../../core/api/cardCollection";
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
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClickHeart = (_id: string) => {
    switch (LOGIN_STATE) {
      case true:
        openLoginModalHandler();
        break;
      case false:
        setIsBookmarked((prev) => !prev);
        real.addNDeleteBookmark(_id);
        break;
    }
  };

  return (
    <St.Card>
      <St.TagsWrapper>
        <TagsSlider tags={cardIdList.tags} />
      </St.TagsWrapper>
      <St.ContentWrapper>{cardIdList.content}</St.ContentWrapper>
      <St.HeartWrapper onClick={() => handleClickHeart(cardIdList._id)}>
        <St.IcEmptyHeart />
        {isBookmarked && <CustomFullHeart />}
      </St.HeartWrapper>
    </St.Card>
  );
}
