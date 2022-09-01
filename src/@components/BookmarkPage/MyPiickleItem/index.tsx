import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { IcSmallEmptyHeart, IcSmallFullHeart } from "../../../asset/icon";
import { cardCollectionApi } from "../../../core/api/cardCollection";
import { sliderIdxState } from "../../../core/atom/slider";
import { routePaths } from "../../../core/routes/path";
import { St } from "./style";

interface MyPiickleItemProps {
  cardId: string;
  content: string;
  idx: number;
}

export default function MyPiickleItem(props: MyPiickleItemProps) {
  const { cardId, content, idx } = props;
  const [isBookmarked, setIsBookmarked] = useState<boolean>(true);
  const navigate = useNavigate();
  const setSliderIdx = useSetRecoilState(sliderIdxState);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
    cardCollectionApi.addNDeleteBookmark(cardId);
  };

  const goCardView = () => {
    navigate(routePaths.CardCollection, { state: { type: "bookmark" } });
    setSliderIdx(idx);
  };

  return (
    <St.MyPiickle>
      <St.MyPiickleContent>{content}</St.MyPiickleContent>
      <St.HeartWrapper onClick={toggleBookmark}>
        {isBookmarked ? <IcSmallFullHeart /> : <IcSmallEmptyHeart />}
      </St.HeartWrapper>
      <St.MyPiickleLink type="button" onClick={goCardView} />
    </St.MyPiickle>
  );
}
