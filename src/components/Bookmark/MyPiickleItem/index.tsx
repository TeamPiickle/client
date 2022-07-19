import { useState } from "react";

import { IcSmallEmptyHeart, IcSmallFullHeart } from "../../../asset/icon";
import { real } from "../../../core/api/cardCollection";
import { myPiickle } from "..";
import { St } from "./style";

interface MyPiickleItemProps {
  myPiickle: myPiickle;
}

export default function MyPiickleItem(props: MyPiickleItemProps) {
  const { myPiickle } = props;
  const { cardId, content } = myPiickle;
  const [isBookmarked, setIsBookmarked] = useState<boolean>(true);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
    real.addNDeleteBookmark(cardId);
  };

  return (
    <St.MyPiickle>
      <St.MyPiickleContent>{content}</St.MyPiickleContent>
      <St.HeartWrapper onClick={() => toggleBookmark()}>
        {isBookmarked ? <IcSmallFullHeart /> : <IcSmallEmptyHeart />}
      </St.HeartWrapper>
    </St.MyPiickle>
  );
}
