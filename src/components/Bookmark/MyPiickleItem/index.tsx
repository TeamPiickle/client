import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { IcSmallEmptyHeart, IcSmallFullHeart } from "../../../asset/icon";
import { cardCollectionApi } from "../../../core/api/cardCollection";
import { sliderIdxState } from "../../../core/atom/slider";
import { myPiickle } from "..";
import { St } from "./style";

interface MyPiickleItemProps {
  myPiickle: myPiickle;
  idx: number;
}

export default function MyPiickleItem(props: MyPiickleItemProps) {
  const { myPiickle, idx } = props;
  const { cardId, content } = myPiickle;
  const [isBookmarked, setIsBookmarked] = useState<boolean>(true);
  const navigate = useNavigate();
  const setSliderIdx = useSetRecoilState(sliderIdxState);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
    cardCollectionApi.addNDeleteBookmark(cardId);
  };

  const goCardView = () => {
    navigate("/card-collection", { state: { type: "bookmark" } });
    setSliderIdx(idx);
  };

  return (
    <St.MyPiickle onClick={goCardView}>
      <St.MyPiickleContent>{content}</St.MyPiickleContent>
      <St.HeartWrapper onClick={toggleBookmark}>
        {isBookmarked ? <IcSmallFullHeart /> : <IcSmallEmptyHeart />}
      </St.HeartWrapper>
    </St.MyPiickle>
  );
}
